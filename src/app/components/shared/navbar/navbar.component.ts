import {
  Component,
  OnInit,
  OnDestroy,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit, OnDestroy {
  isMobileMenuOpen = false;
  isDarkMode = false;

  items = [
    {
      label: 'Home',
      routeLink: '/home',
    },
    {
      label: 'Projects',
      routeLink: '/projects',
    },
    {
      label: 'About',
      routeLink: '/about',
    },
    {
      label: 'Contact',
      routeLink: '/contact',
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Check for saved theme preference or default to light mode
      const savedTheme = localStorage.getItem('theme');
      const prefersDark = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      this.isDarkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
      this.applyTheme();

      // Listen for system theme changes
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          if (!localStorage.getItem('theme')) {
            this.isDarkMode = e.matches;
            this.applyTheme();
          }
        });

      // Close mobile menu on window resize
      window.addEventListener('resize', () => {
        if (window.innerWidth > 768 && this.isMobileMenuOpen) {
          this.closeMobileMenu();
        }
      });

      // Close mobile menu on route change (you might want to inject Router for this)
      // this.router.events.pipe(
      //   filter(event => event instanceof NavigationEnd)
      // ).subscribe(() => {
      //   this.closeMobileMenu();
      // });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // Clean up event listeners if needed
      this.closeMobileMenu();
    }
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.applyTheme();

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    }
  }

  private applyTheme() {
    if (isPlatformBrowser(this.platformId)) {
      const htmlElement = document.documentElement;
      const bodyElement = document.body;

      if (this.isDarkMode) {
        htmlElement.setAttribute('data-theme', 'dark');
        bodyElement.classList.add('darkmode');
      } else {
        htmlElement.removeAttribute('data-theme');
        bodyElement.classList.remove('darkmode');
      }
    }
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;

    if (isPlatformBrowser(this.platformId)) {
      const bodyElement = document.body;

      if (this.isMobileMenuOpen) {
        bodyElement.classList.add('mobile-menu-open');
      } else {
        bodyElement.classList.remove('mobile-menu-open');
      }
    }
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;

    if (isPlatformBrowser(this.platformId)) {
      document.body.classList.remove('mobile-menu-open');
    }
  }

  // Optional: Method to handle keyboard navigation
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Escape' && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }
}
