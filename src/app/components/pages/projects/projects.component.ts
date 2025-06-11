import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
projects = [
  {
    image: 'assets/projects/img1.png',
    title: 'UI Design',
    headerText: 'Login Form',
    text: 'Clean and user-friendly login interface for quick access.',
    href: 'https://github.com/vay-dev'
  },
  {
    image: 'assets/projects/img2.png',
    title: 'Portfolio Design',
    headerText: 'Fashion Designer Portfolio',
    text: 'Showcasing creativity and identity through elegant layouts.',
    href: 'https://github.com/vay-dev'
  },
  {
    image: 'assets/projects/img3.png',
    title: 'UI Design',
    headerText: 'Login Form',
    text: 'Modern form with strong <br /> visual hierarchy and clarity.',
    href: 'https://github.com/vay-dev'
  },
  {
    image: 'assets/projects/img4.png',
    title: 'E-commerce UX',
    headerText: 'Shopping Website',
    text: 'Seamless shopping experience with clear navigation flow.',
    href: 'https://github.com/vay-dev'
  },
  {
    image: 'assets/projects/img5.png',
    title: 'Dashboard UI',
    headerText: 'Kalban Inventory',
    text: 'Inventory dashboard with real-time <br /> data visibility.',
    href: 'https://github.com/vay-dev'
  },
  {
    image: 'assets/projects/img6.png',
    title: 'Portfolio UI',
    headerText: 'Model Website',
    text: 'Stylish showcase built for visual <br /> storytelling.',
    href: 'https://github.com/vay-dev'
  }
  
];

}
