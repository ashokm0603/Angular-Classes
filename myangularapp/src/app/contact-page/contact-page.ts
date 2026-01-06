import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  formData = {
    name: '',
    email: '',
    message: '',
  };

  sendEmail() {
    emailjs
      .send(
        'service_rkfukey', // Replace with your EmailJS service ID
        'template_teoy99b', // Replace with your EmailJS template ID
        {
          from_name: this.formData.name,
          reply_to: this.formData.email,
          message: this.formData.message,
          to_email: 'ashokashokm2001@gmail.com', // ✅ Add this line
        },
        'N3xga7GAtw352Ac-q' // Replace with your EmailJS Public Key (formerly user ID)
      )
      .then(() => {
        alert('✅ Email sent successfully!');
        this.formData = { name: '', email: '', message: '' }; // reset form
      })
      .catch((err) => {
        console.error('❌ Email error:', err);
        alert('Email failed to send. Check console for error.');
      });
  }
}
