import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-even-binding',
  imports: [CommonModule],
  templateUrl: './even-binding.html',
  styleUrl: './even-binding.css',
})
export class EvenBinding {
  isContainerActive = false;
  isListActive = false;
  color = '';

  toggle() {
    this.isContainerActive = !this.isContainerActive;
    console.log(this.isContainerActive);
  }
  listToggle() {
    this.isListActive = true;
    console.log(this.isListActive);
  }

  listToggleOut() {
    this.isListActive = false;
  }

  changeBgColor() {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    this.color = `#${hex}`;
    console.log(hex);
  }
}
