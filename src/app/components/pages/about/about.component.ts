import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgbCarouselModule, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {

  info = [
    { label: 'Age', value: '18' },
    { label: 'Residence', value: 'BD' },
    { label: 'Freelance', value: 'Available', color: 'green' },
    { label: 'Address', value: 'Lagos, Nigeria' }
  ];

  skills = [
    { name: 'Html', percentage: 80 },
    { name: 'CSS', percentage: 95 },
    { name: 'Js', percentage: 80 },
    { name: 'Ts', percentage: 75 },
  ];

  testimonials = [
    {
      text: 'Amazing experience!',
      name: 'Esther Howard',
      position: 'Managing Director, ABC Company',
    },
    {
      text: 'Top-notch quality.',
      name: 'Jacob Jones',
      position: 'CTO, XYZ Inc.',
    },
    {
      text: 'Very good design.',
      name: 'Jhon Doe',
      position: 'KLE, WER Ltd.',
    },
  ];

  extraSkills = [
    'Bootstrap',
    'Materialize',
    'UI Verse',
    'Tailwind',
    'Sass',
    'Webpack (basic config knowledge)',
    'EmailJS',
    'Git & GitHub',
    'Netlify',
    'GitHub Pages'
  ];


  currentSlide: number = 0;

  @ViewChild('carouselRef', { static: false }) carouselRef!: NgbCarousel;

  onSlide(slideEvent: any) {
    this.currentSlide = Number(slideEvent.current);
  }

  goToNext() {
    this.carouselRef.next();
  }

  goToPrev() {
    this.carouselRef.prev();
  }
}
