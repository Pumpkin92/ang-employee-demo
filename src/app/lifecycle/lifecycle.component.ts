import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrl: './lifecycle.component.css',
})
export class LifecycleComponent implements OnInit {
  pcountry: string = 'usa';
  emp = { name: 'Shalini' };
  show: boolean = false;
  constructor() {
    console.log('lifecycle parent constructor');
  }
  ngOnInit(): void {
    console.log(`parent ng oninit `);
  }
}
