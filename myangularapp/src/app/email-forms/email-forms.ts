import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { EmailPreview } from '../email-preview/email-preview';

@Component({
  selector: 'app-email-forms',
  standalone: true,
  imports: [FormsModule, CommonModule, EmailPreview],
  templateUrl: './email-forms.html',
  styleUrls: ['./email-forms.css'],
})
export class EmailForms {
  isDisplay = true;
  name = '';
  email = '';
  jobTitle = '';
  skills = '';
  emailSent = false;
  errorMsg = '';

  sendEmail() {
    this.isDisplay = false;
    const templateParams = {
      from_name: this.name,
      to_email: this.email,
      job_title: this.jobTitle,
      skills: this.skills,
    };

    emailjs
      .send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        this.emailSent = true;
        this.errorMsg = '';
      })
      .catch((error) => {
        this.emailSent = false;
        this.errorMsg = 'Failed to send email: ' + error.text;
      });
  }
}
