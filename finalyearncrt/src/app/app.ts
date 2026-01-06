import { Component } from '@angular/core';
import { StructuralDirectiveIfElse } from './structural-directive-if-else/structural-directive-if-else';

@Component({
  selector: 'app-root',
  imports: [StructuralDirectiveIfElse],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  colors = '';
  getColors() {
    console.log(this.colors);
  }

  arr = [10, 20, 30, 40, 50, 60, 70];
}
