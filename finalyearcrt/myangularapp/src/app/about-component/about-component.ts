import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-about-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './about-component.html',
  styleUrls: ['./about-component.css'],
})
export class AboutComponent {
  data = '';
  name: String = '';
  values: string[] = [];
  stdName = 'Ravi';
  stdCourse = 'B.tech';
  Skills = ['html', 'css', 'js', 'angular js'];
  details = [
    { name: 'ravi', course: 'B.tech' },
    { name: 'rani', course: 'BCM' },
    { name: 'ramu', course: 'B.tech' },
  ];

  display() {
    this.values.push(this.data);
  }
}
