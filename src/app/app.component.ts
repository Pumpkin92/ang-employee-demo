import {
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { DemoService } from './service/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angulardemo';
  message = 'helooooo';
  isEnabled: boolean = false;
  username = 'Shalini';
  constructor(public service: DemoService) {}

  clicked() {
    alert('hello');
  }
  checked() {
    this.isEnabled = true;
  }
  showEmpForm: boolean = false;
  toggleEmpForm() {
    this.showEmpForm = !this.showEmpForm;
  }
  newemp: any;
  newEmpAdded(newemp: any) {
    console.log(newemp);
    this.newemp = newemp;
    this.showEmpForm = !this.showEmpForm;
  }
}
