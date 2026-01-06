import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-event-binding',
  imports: [CommonModule, FormsModule],
  templateUrl: './event-binding.html',
  styleUrl: './event-binding.css',
})
export class EventBinding {
  name = '';
  subject = '';
  year = '';
  address = '';
  college = '';
  isActive = true;
  displayDiv() {
    this.isActive = false;
    confirm('Button clicked......');
  }
}
