import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToTopButtonComponent } from '../shared/back-to-top-button/back-to-top-button.component';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, BackToTopButtonComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
    goUp ():void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
}
