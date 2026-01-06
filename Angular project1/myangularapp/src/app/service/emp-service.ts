import { Injectable } from '@angular/core';
import { EmpDetails } from '../model/empDetails';
@Injectable({
  providedIn: 'root',
})
export class EmpService {
  empData: EmpDetails[] = [
    {
      empId: 100,
      name: 'Ravi',
      email: 'ravi@gmail.com',
      phone: 9874561230,
      skills: ['HTML', 'Vue Js', 'Node Js', 'Express Js', 'Next Js'],

      dateOfJoin: new Date(),
      experience: 2,
      salary: 50000,
      bonus: 6000,
      role: 'Full Stack Developer',
      department: 'developer',
    },

    {
      empId: 200,
      name: 'Raji',
      email: 'rani@gmail.com',
      phone: 9822223540,
      skills: ['Node Js', 'Express Js', 'Next Js'],
      dateOfJoin: new Date(),
      experience: 5,
      salary: 150000,
      bonus: 20000,
      role: 'Project Manager',
      department: 'Manager',
    },
    {
      empId: 300,
      name: 'Jagadhish',
      email: 'jagadhish@gmail.com',
      phone: 984123540,
      skills: ['Node Js', 'Express Js', 'Next Js'],
      dateOfJoin: new Date(),
      experience: 5,
      salary: 80000,
      bonus: 8000,
      role: 'Data Analyst',
      department: 'Developer',
    },
  ];
  getEmpDetails(): EmpDetails[] {
    return this.empData;
  }
}
