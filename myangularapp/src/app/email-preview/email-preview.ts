import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-email-preview',
  imports: [],
  templateUrl: './email-preview.html',
  styleUrl: './email-preview.css',
})


export class EmailPreview {
  @Input() name: string = '';
  @Input() jobTitle: string = '';
  @Input() skills: string = '';
}