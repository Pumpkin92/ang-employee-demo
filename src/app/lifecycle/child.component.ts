import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() country: string = 'uk';
  @Input() employee = { name: '' };
  ngDoCheck(): void {
    console.log(`child ng do check ${this.country} : ${this.employee.name}`);
  }
  constructor() {
    console.log(`child constructor ${this.country}`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`child ng on changes ${this.country} : ${this.employee.name}`);
    this.countrystates = this.data.filter(
      (item) => item.country === this.country
    );
  }
  ngOnInit(): void {
    console.log(`child ng on init ${this.country}`);
  }
  ngOnDestroy(): void {
    console.log(`child destroy`);
  }

  data: any[] = [
    { country: 'uk', states: ['London'] },
    { country: 'india', states: ['maharashtra', 'UP', 'MP'] },
    { country: 'ireland', states: ['ire1', 'ire2'] },
    { country: 'usa', states: ['Illinois', 'SFO'] },
  ];
  countrystates: any[] = [];
}
