import { RouterModule, Routes } from '@angular/router';

// components
import { NavbarComponent, FooterComponent, HeaderComponent } from './components/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';


const footerPart = { path: '' , component: FooterComponent, outlet: 'footer'};
const navbarPart = { path: '' , component: NavbarComponent, outlet: 'navbar'};
const headerPart = { path: '' , component: HeaderComponent, outlet: 'header'};



const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'logout',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'home/:id',
    component: HomeComponent,
    children: [
      headerPart,
      footerPart,
      navbarPart
    ]
  },
  {
    path: 'profile/:id',
    component: ProfileComponent,
    children: [
      headerPart,
      footerPart,
      navbarPart
    ]
  },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
