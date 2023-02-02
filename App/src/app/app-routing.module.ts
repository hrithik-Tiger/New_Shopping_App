import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartpageComponent } from './cartpage/cartpage.component';
import { DashboardComponent } from './Dashboard/dashboard/dashboard.component';
import { LoginComponent } from './LoginComponent/login/login.component';

const routes: Routes = [
  {path: '', component : LoginComponent},
  {path: 'login', component : LoginComponent},
  {path: 'dashboard', component : DashboardComponent},
  {
    path: 'cart',
    component:CartpageComponent,
  
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
