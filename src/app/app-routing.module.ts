import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactusComponent } from './contactus/contactus.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';
import { ChatComponent } from './chat/chat.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DpageComponent } from './dpage/dpage.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'dpage',
    component:DpageComponent
  },
  {
    path:'body',
    component:BodyComponent
  },
  { path: 'contactus', component: ContactusComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'signup', component: SignupComponent },
  {path:'chat', component:ChatComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect to home on load
  { path: '**', redirectTo: '/dashboard' }  // Wildcard redirect for unknown paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
