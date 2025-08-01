// src/app/your-component/your-component.component.ts
import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-home', // Make sure this matches your actual selector
  templateUrl: './home.component.html',
  imports: [CommonModule],
  styleUrl: './home.component.scss', // Or .css
})
export class HomeComponent implements OnInit, OnDestroy {
  processSteps = [
    {
      icon: 'fa-solid fa-calendar-days',
      title: '1. Research',
      content:
        'Understand user needs, market trends, and business goals to lay the foundation for a successful project.',
    },
    {
      icon: 'fa-solid fa-chart-line',
      title: '2. Analyze',
      content:
        'Evaluate insights, identify opportunities, and define clear objectives to guide the design strategy.',
    },
    {
      icon: 'fa-solid fa-pen',
      title: '3. Design',
      content:
        "Create intuitive, engaging, and user-centered designs that align with the project's vision and goals.",
    },
  ];

  // Use @ViewChildren to get references to all elements with #glossyItem
  @ViewChildren('glossyItem') glossyItems!: QueryList<ElementRef>;

  private currentIndex: number = 0;
  private intervalId: any; // Stores the ID of the interval so we can clear it

  ngOnInit(): void {
    setTimeout(() => {
      if (this.glossyItems && this.glossyItems.length > 0) {
        this.toggleGlossyEffect();

        this.intervalId = setInterval(() => {
          this.toggleGlossyEffect();
        }, 3000);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private toggleGlossyEffect(): void {
    if (!this.glossyItems || this.glossyItems.length === 0) {
      return;
    }

    const itemsArray = this.glossyItems.toArray();
    const prevIndex =
      (this.currentIndex - 1 + itemsArray.length) % itemsArray.length;
    itemsArray[prevIndex].nativeElement.classList.remove('glossy-class');

    itemsArray[this.currentIndex].nativeElement.classList.add('glossy-class');

    this.currentIndex = (this.currentIndex + 1) % itemsArray.length;
  }
}
