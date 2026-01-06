import { Component } from '@angular/core';
import { Hello } from '../hello/hello';

@Component({
  selector: 'app-home-page',
  imports: [Hello],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {}
