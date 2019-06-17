import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Your selected the department with ID: {{ departmentid }}</h3>

    <p>
      <button (click)='showOverview()'>Overview</button>
      <button (click)='showContact()'>Contact</button>
    </p>
    <router-outlet></router-outlet>

    <p>
      <button (click)='goPrevious()'> \< Previous</button>
      <button (click)='goNext()'> Next \></button>
    </p>

    <div>
      <button (click)='goBackToList()'>back to List</button>
    </div>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

  public departmentid;

  /**
   * This constructor get the ActivatedRoute injected,
   * so that the class can react to url parameters
   *
   * @param activeRoute the injected activeRouter
   */
  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  /**
   * When the view is loeaded, this method is fired
   * and we use it to analyze the url parameter
   */
  ngOnInit() {
    /** -- snapshot --
     * parseInt -> transforms the string to an int
     * activeRout -> the ActiveRout reference
     * snapshot -> take a snapshot of the current url
     * paramMap -> get a map of url marameters that are contained by the snapshot
     * get -> get the value of a specific parameter from the paramMap
     */
    //let id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));

    /** -- observable --
     * activeRoute -> the reference to the ActiveRoute
     * paramMap -> the map of the current parameters of the url
     * subscribe -> subscribe to an observabel
     * (params: ParamMap) -> subcribe to the observable paramMap
     * => -> lambda function that wil be called if the observable has changed
     * params.get('id') -> get the new id from the observable
     */
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentid = id;
    });
  }

  /**
   * use the router to decrease the id parameter
   */
  goPrevious(){
    let previousID = this.departmentid -1;
    this.router.navigate(['/departments', previousID]);
  }

  /**
   * use the router to increase the id parameter
   */
  goNext() {
    let nextID = this.departmentid + 1;
    this.router.navigate(['/departments', nextID]);
  }

  goBackToList() {
    let selectedId = this.departmentid ? this.departmentid : null;

    // {id: selectedId} is a optional url routing parameter
    //this.router.navigate(['/departments', {id: selectedId}]);

    this.router.navigate(['../', { id: selectedId }], { relativeTo: this.activeRoute });
  }

  /**
   * navigate to the child route overview
   */
  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activeRoute});
  }

  /**
  * navigate to the child route contact
  */
  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activeRoute});
  }

}
