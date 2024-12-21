import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  constructor(@Inject(LOCALE_ID) public locale: string) {}
  bdate = new Date();
  object: Object = {
    foo: 'bar',
    baz: 'qux',
    nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] },
  };
  company = 'tesco';
  x: Promise<string> | null = Promise.resolve('hello world');
}
