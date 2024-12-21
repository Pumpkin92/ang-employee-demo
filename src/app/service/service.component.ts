import { Component } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrl: './service.component.css',
  providers: [DemoService], /// by adding this line it creates seperate instances of demo service
})
export class ServiceComponent {
  constructor(public service: DemoService) {}
}
