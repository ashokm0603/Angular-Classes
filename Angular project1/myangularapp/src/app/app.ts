import { Component } from '@angular/core';

import { ApiUsersData } from './component/api-users-data/api-users-data';

@Component({
  selector: 'app-root',
  imports: [ApiUsersData],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
