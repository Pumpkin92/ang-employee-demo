import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';
import { TestingComponent } from './testing/testing.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import localeFr from '@angular/common/locales/fr';
import { EmpformComponent } from './empform/empform.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { ChildComponent } from './lifecycle/child.component';
import { ServiceComponent } from './service/service.component';
import { ObservablesComponent } from './observables/observables.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    EmployeesComponent,
    TestingComponent,
    EmployeesComponent,
    PipesComponent,
    EmpformComponent,
    LifecycleComponent,
    ChildComponent,
    ServiceComponent,
    ObservablesComponent,
    LoginComponent,
    PageNotFoundComponentComponent,
    ProfileComponent,
    ProfileDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
