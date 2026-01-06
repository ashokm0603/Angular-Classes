import { Component } from '@angular/core';

@Component({
  selector: 'app-pass-data',
  imports: [],
  templateUrl: './pass-data.html',
  styleUrl: './pass-data.css',
})
export class PassData {
  name = 'Ravi';
  skills = ['html', 'css', 'javascript', 'node js'];
  salary = 90000.0;
  address = {
    city: 'vijayawada',
    pinCode: 561207,
  };
}
