import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { EmpformComponent } from './empform/empform.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { authGuard } from './service/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'employees', pathMatch: 'full' },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/:id', component: ProfileComponent },
  // {
  //   path: 'employees/:id',
  //   component: ProfileComponent,
  //   children: [{ path: 'detail', component: ProfileDetailComponent }],
  // },
  {
    path: 'employees/:id',
    component: ProfileComponent,
    canActivate: [authGuard],
    children: [{ path: 'detail', component: ProfileDetailComponent }],
  },
  { path: 'add', component: EmpformComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
