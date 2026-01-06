import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { EmpDetails } from '../../model/empDetails';
import { EmpService } from '../../service/emp-service';
import { CurrencyPipe } from '@angular/common';

@Pipe({
  name: 'phonenumber',
})
export class PhonePipe implements PipeTransform {
  transform(value: number): string {
    return `+91 ${value}`;
  }
}

@Component({
  selector: 'app-salary-component',
  imports: [CurrencyPipe, PhonePipe],
  templateUrl: './salary-component.html',
  styleUrl: './salary-component.css',
})
export class SalaryComponent implements OnInit {
  salaryData!: EmpDetails[];
  constructor(private sd: EmpService) {}
  ngOnInit(): void {
    this.salaryData = this.sd.getEmpDetails();
  }
}
