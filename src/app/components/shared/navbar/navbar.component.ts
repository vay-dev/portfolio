import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  items = [
    {
      label: 'Home',
      routeLink: '/home'
    },
    {
      label: 'Projects',
      routeLink: '/projects'
    },
    {
      label: 'About',
      routeLink: '/about'
    },
    {
      label: 'Services',
      routeLink: '/services'
    }, {
      label: 'Contact',
      routeLink: '/contact'
    }
  ]

}
