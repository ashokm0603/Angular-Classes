import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive-if-else',
  imports: [FormsModule],
  templateUrl: './structural-directive-if-else.html',
  styleUrl: './structural-directive-if-else.css',
})
export class StructuralDirectiveIfElse {
  username = '';
  password = '';
  isVisibleAlertMessage = false;

  submitForm() {
    this.isVisibleAlertMessage = true;
    console.log('Username :', this.username);
    console.log('Password :', this.password);
  }
  resetForm() {
    this.username = '';
    this.password = '';
    this.isVisibleAlertMessage = false;
  }

  filteredSalary = 0;
  displayTable = false;
  empDetails = [
    { name: 'ravi', salary: 50000, role: 'Developer', address: 'Tenali' },
    {
      name: 'Rani',
      salary: 60000,
      role: 'Front end developer',
      address: 'bangalore',
    },
    {
      name: 'Anusha',
      salary: 90000,
      role: 'Front end developer',
      address: 'bangalore',
    },
    {
      name: 'Raju',
      salary: 95000,
      role: 'back end developer',
      address: 'bangalore',
    },
  ];

  applyFlitterTable() {
    this.displayTable = true;
  }
}
