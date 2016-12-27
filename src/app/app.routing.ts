import { RouterModule, Routes } from '@angular/router';

// components
import { NavbarComponent, FooterComponent } from './components/common';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const footerPart = { path: '' , component: FooterComponent, outlet: 'footer'};
const navbarPart = { path: '' , component: NavbarComponent, outlet: 'navbar'};


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      footerPart,
      navbarPart
    ]
  },
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
