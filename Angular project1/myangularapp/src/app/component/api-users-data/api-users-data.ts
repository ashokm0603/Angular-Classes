import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-users-data',
  imports: [HttpClientModule],
  templateUrl: './api-users-data.html',
  styleUrl: './api-users-data.css',
})
export class ApiUsersData implements OnInit {
  users: Object = [];
  apiUrl: string = 'https://api.github.com/users';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.users = this.http.get(this.apiUrl).subscribe({
      next: (res) => console.log(res),
      error: (err) => console.error(err),
    });
  }
}
