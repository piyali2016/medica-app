import { RouterModule, Routes } from '@angular/router';

// components
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, data : {hideNavbar : true}},
  { path: 'home', component: HomeComponent, data : {hideNavbar : false}},
  { path: 'about', component: AboutComponent, data : {hideNavbar : false}}
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
