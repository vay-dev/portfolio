import { Component, HostListener, output } from '@angular/core';

@Component({
  selector: 'app-back-to-top-button',
  imports: [],
  templateUrl: './back-to-top-button.component.html',
  styleUrl: './back-to-top-button.component.scss'
})
export class BackToTopButtonComponent {
  message = output();

  isVisible = <boolean>false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isVisible = scrollTop > 400;
  }

  goUp() {
    this.message.emit();
  }
}
