import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userApi = 'https://api.github.com/users';
  constructor(private ua: HttpClient) {}

  getApiUsers() {
    return this.ua.get(this.userApi);
  }
}
