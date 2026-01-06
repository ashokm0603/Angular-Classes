import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mouse-over',
  imports: [CommonModule],
  templateUrl: './mouse-over.html',
  styleUrl: './mouse-over.css',
})
export class MouseOver {
  isDisplay = true;
  onMouseOver() {
    this.isDisplay = false;
  }

  onMouseOut() {
    this.isDisplay = true;
  }
}
