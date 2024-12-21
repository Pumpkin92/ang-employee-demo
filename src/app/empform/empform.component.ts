import { Component, EventEmitter, Output } from '@angular/core';
import { Employee } from '../model/employee';
import { EmphttpService } from '../service/emphttp.service';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrl: './empform.component.css',
})
export class EmpformComponent {
  emp: Employee;

  constructor(public empservice: EmphttpService) {
    this.emp = {
      eid: 1,
      ename: '',
      password: '',

      email: '',
      phone: '',

      address: { country: '' },
    };
  }
  saveEmployee() {
    console.log(this.emp);
    this.empservice
      .addEmployee(this.emp)
      .subscribe((response) => console.log(response));

    // this.empadded.emit(this.emp);
    //added this in front of emp due to errors
    // this.emp = {
    //   eid: 0,
    //   ename: '',
    //   password: '',
    //   email: '',
    //   phone: '',
    //   address: { city: '', country: '', zipcode: 0 },
    // };
  }

  @Output()
  empadded: EventEmitter<Employee> = new EventEmitter();
}
