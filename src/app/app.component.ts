import { Component } from '@angular/core';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
