export class EmployeeModel {
  empId: number;
  name: String;
  city: String;
  state: String;
  emailId: String;
  contactNo: String;
  address: String;
  pinCode: String;

  constructor() {
    this.address = '';
    this.city = '';
    this.contactNo = '';
    this.name = '';
    this.empId = 1;
    this.emailId = '';
    this.state = '';
    this.pinCode = '';
  }
}
