import { Component, ViewChild } from '@angular/core';
import { NgIf } from '@angular/common';
import { NgbCarousel, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NgIf, NgbCarouselModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
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
