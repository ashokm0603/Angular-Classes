import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true, // 
  imports: [CommonModule, NgFor, HttpClientModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'], 
})
export class Home {
  data: any[] = []; 

  constructor(private http: HttpClient) {
    this.http.get<any[]>('https://api.github.com/users').subscribe((res) => {
      this.data = res;
      console.log(this.data);
    });
  }
}
