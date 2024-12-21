import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrl: './profile-detail.component.css',
})
export class ProfileDetailComponent {
  constructor(private route: ActivatedRoute) {}
  eid: number = 0;
  ngOnInit(): void {
    this.route.parent?.params.subscribe(
      (param) => (this.eid = parseInt(param['id']))
    );
  }
}
