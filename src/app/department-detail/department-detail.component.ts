import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  template: `
    <h3>Your selected the department with ID: {{ departmentid }}</h3>
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
  constructor(private activeRoute: ActivatedRoute) { }

  /**
   * When the view is loeaded, this method is fired
   * and we use it to analyze the url parameter
   */
  ngOnInit() {
    /**
     * parseInt -> transforms the string to an int
     * activeRout -> the ActiveRout reference
     * snapshot -> take a snapshot of the current url
     * paramMap -> get a map of url marameters that are contained by the snapshot
     * get -> get the value of a specific parameter from the paramMap
     */
    let id = parseInt(this.activeRoute.snapshot.paramMap.get('id'));

    this.departmentid = id;
  }

}
