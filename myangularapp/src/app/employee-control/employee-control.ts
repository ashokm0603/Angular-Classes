import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeModel } from './EmployeeModel';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-employee-control',
  imports: [ReactiveFormsModule],
  templateUrl: './employee-control.html',
  styleUrl: './employee-control.css',
})
export class EmployeeControl {
  employeeForm: FormGroup = new FormGroup({});
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeList: EmployeeModel[] = [];
  constructor() {
    this.createForm();
    if (typeof window !== 'undefined' && localStorage) {
      const oldData = localStorage.getItem('EmpData');
      if (oldData != null) {
        const parserData = JSON.parse(oldData);
        this.employeeList = parserData;
      }
    }
  }

  createForm() {
    this.employeeForm = new FormGroup({
      empId: new FormControl(this.employeeObj.empId),
      name: new FormControl(this.employeeObj.name, [Validators.required]),
      city: new FormControl(this.employeeObj.city),
      address: new FormControl(this.employeeObj.address),
      contactNo: new FormControl(this.employeeObj.contactNo),
      emailId: new FormControl(this.employeeObj.emailId),
      pinCode: new FormControl(this.employeeObj.pinCode, [Validators.required]),
      state: new FormControl(this.employeeObj.state),
    });
  }

  onSave() {
    if (typeof window !== 'undefined' && localStorage) {
      const oldData = localStorage.getItem('EmpData');
      if (oldData != null) {
        const parserData = JSON.parse(oldData);
        this.employeeForm.controls['empId'].setValue(parserData.length + 1);
        this.employeeList.unshift(this.employeeForm.value);
      } else {
        this.employeeList.unshift(this.employeeForm.value);
      }

      localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
    }
  }

  onEdit(item: EmployeeModel) {
    this.employeeObj = item;
    this.createForm();
  }
  onUpdate() {
    const record = this.employeeList.find(
      (m) => m.empId === this.employeeForm.controls['empId'].value
    );
    if (record != undefined) {
      record.address = this.employeeForm.controls['address'].value;
      record.name = this.employeeForm.controls['name'].value;
      record.contactNo = this.employeeForm.controls['contactNo'].value;
    }
    localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
    this.employeeObj = new EmployeeModel();
    this.createForm();
  }
  onDelete(id: number) {
    const isDelete = confirm('Are you Sure to Delete..!');
    if (isDelete) {
      const index = this.employeeList.findIndex((m) => m.empId == id);
      this.employeeList.splice(index, 1);
      localStorage.setItem('EmpData', JSON.stringify(this.employeeList));
    }
  }
}
