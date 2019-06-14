import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-list',
  template: `
    <p>DepartmentListComponent</p>
    <ul class='items'>
      <!-- (click)='itemSelected(dp)'   event handler method for click event-->
      <!-- [class.selected]="isSelected(dp)"    apply css style class via classbinding -->
      <!-- *ngFor='let dp of departments'   itterate ofer all element of the list-->
      <li (click)='itemSelected(dp)' [class.selected]="isSelected(dp)"  *ngFor='let dp of departments'>
          <span class='badge'>{{ dp.id }}</span> {{dp.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepartmentListComponent implements OnInit {

  private selectedId;

  public departments = [
    { 'id': 1, 'name': 'WHZ' },
    { 'id': 2, 'name': 'PTI' },
    { 'id': 3, 'name': 'AMB' },
    { 'id': 4, 'name': 'WiWi' },
    { 'id': 5, 'name': 'KFT' },
    { 'id': 6, 'name': 'Mensa' }
  ]

  /**
   * The constructor gets an instance of the router injected
   * so that we can redirect to other websites via code
   *
   * @param router  the injected router
   */
  constructor(private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  /**
   * This event handler shall open the DepartmentDetailComponent View
   * for the selected department
   *
   * @param department the selected department from the list
   */
  itemSelected(department){
    /**
     * The router.navigate method takes an array of parameters
     *
     * With those privided the router will construct the url from the parameters
     * and start the redirection.
     *
     * ['/departments', department.id] wil result in /departments/<id>
     */
    this.router.navigate(['/departments', department.id]);
  }

  isSelected(department) {
    // === 	equal value and equal type
    return this.selectedId === department.id;
  }
}
