import { Component, OnInit } from '@angular/core';
import { EmpService } from '../../service/emp-service';
import { EmpDetails } from '../../model/empDetails';
@Component({
  selector: 'app-emp-details-component',
  imports: [],
  templateUrl: './emp-details-component.html',
  styleUrl: './emp-details-component.css',
})
export class EmpDetailsComponent implements OnInit {
  empData!: EmpDetails[];
  constructor(private ed: EmpService) {}
  ngOnInit(): void {
    this.empData = this.ed.getEmpDetails();
  }
}
