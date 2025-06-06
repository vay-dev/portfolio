import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ServicesComponent } from './components/pages/services/services.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, {
    path: 'home', 
    component: HomeComponent
  }, {
    path: 'about', 
    component: AboutComponent
  }, {
    path: 'projects',
    component: ProjectsComponent
  }, {
    path: 'services',
    component: ServicesComponent
  }
];
