import { CommonModule, NgFor } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  imports: [NgFor, CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  formData: any = {};
  sending: boolean = false;

  sendEmail(form: NgForm) {
    if (this.sending) {
      console.warn('Sending in process please wait');
      return;
    }

    if (!form.valid) {
      alert('Please fill in all required fields.');
      return;
    }

    this.sending = true;

    if (form.valid) {
      emailjs
        .send(
          'service_6tprcqf',
          'template_5qrs32r',
          this.formData,
          'z_rz1HBDj-dGUXvCL'
        )
        .then(
          () => {
            alert('Email sent successfully!');
            form.resetForm();
            this.sending = false;
          },
          (error) => {
            console.error('Email error:', error);
            alert('Failed to send email.');
            this.sending = false;
          }
        );
    }
  }

  addresses = [
    {
      icon: 'fa-solid fa-location-dot',
      pText: 'Address',
      h2Text: 'Alimosho 123',
    },
    {
      icon: 'fa-solid fa-envelope',
      pText: 'Email',
      h2Text: 'ayeniv69@gmail.com',
    },
    {
      icon: 'fa-solid fa-phone',
      pText: 'Call me now',
      h2Text: '+234-707-3111-588',
    },
  ];

  inputs = [
    {
      type: 'text',
      class: '',
      name: 'user_name',
      placeholder: 'Name*',
    },
    {
      type: 'email',
      class: '',
      name: 'user_email',
      placeholder: 'Email*',
    },
    {
      type: 'text',
      class: '',
      name: 'location',
      placeholder: 'Location*',
    },
    {
      type: 'text',
      class: 'half',
      name: 'budget',
      placeholder: 'Budget*',
    },
    {
      type: 'text',
      class: 'half',
      name: 'subject',
      placeholder: 'Subject*',
    },
    {
      type: 'text',
      class: '',
      name: 'message',
      placeholder: 'Message*',
    },
  ];
}
