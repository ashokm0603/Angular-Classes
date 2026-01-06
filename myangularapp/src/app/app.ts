import { Component } from '@angular/core';
import { Products } from './products/products';
import { PipesExample } from './pipes-example/pipes-example';
// import { NgIfExample } from './ng-if-example/ng-if-example';
// import { PipesExample } from './pipes-example/pipes-example';
// import { Products } from './products/products';
//import { EmployeeControl } from './employee-control/employee-control';
// import { EmailForms } from './email-forms/email-forms';

//import { RouterOutlet } from '@angular/router';
//import { EvenBinding } from './even-binding/even-binding';
//import { AngularCrudOperations } from './angular-crud-operations/angular-crud-operations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PipesExample],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
