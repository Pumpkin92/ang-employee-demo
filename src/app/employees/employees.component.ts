import { Component, Input, SimpleChanges } from '@angular/core';
import { employee } from '../model/data';
import { Employee } from '../model/employee';
import { EmphttpService } from '../service/emphttp.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css',
})
export class EmployeesComponent {
  employee = employee;
  // router: any;
  constructor(
    public empservice: EmphttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.empservice.getAllEmployees().subscribe((resp) => {
      console.log('fetched employees');
      console.log(resp);
      this.employee = resp;
    });
  }
  @Input()
  newemp: any = {};
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.newemp);
    if (this.newemp !== undefined) this.employee.unshift(this.newemp);
  }
  delete(emp: Employee) {
    // let objindx = this.employee.findIndex(
    //   (employee) => employee.eid === emp.eid
    // );
    // this.employee.splice(objindx, 1);
    this.empservice
      .deleteEmployee(emp.eid)
      .subscribe((response) => console.log(response));
  }
  edit(emp: Employee) {
    // complete the code to display a form to edit and update the employee
    console.log(emp);
    this.empservice
      .updateEmployee(emp) //might need to change data as some id number and some string so can use emp.eid in this
      .subscribe((response) => console.log(response));
  }
  viewProfile(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}

/**
 * list of products -> details of product
 * list of employess -> details of employees
 *
 * employees component -. gets list of employees
 * iterate over the list of employees to get each employee
 * from the list and pass that to employess component
 *
 * employees is getting the list of employees (usually use spring and get from database)
 * once got that iterate over and pass to the employee component
 *
 * now in employee component takes input in the variable employee
 * then can access the construcot and this is then displauyed on the employee html
 *
 */

/** pipes
 * yyy-mm-dd
 * might want to format a date, pipes are used for that
 * 
 * 234.56789
 * might just want irst 3 decimals
 * pipes are formatting the data for this purpose
 * might want to display currency symbols
 * 
<p>{{ title | uppercase }}</p>
lowercase
// <p>{{ "2024-12-22" | date }}</p>
ngNonBindable - it will not interpret or execute string interpoliation syntax and just displays the text as its written

get locale of client {{locale}} add to component constructor 
@inject(locale_id)public locale:string {}
async pipes
 */
