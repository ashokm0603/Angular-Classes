import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if-example',
  imports: [],
  templateUrl: './ng-if-example.html',
  styleUrl: './ng-if-example.css',
})
export class NgIfExample {
  obj = {
    name: 'reddy',
    role: 'developer',
    salary: 9000,
  };
  isVisible = true;
  btnText = 'Show';
  url =
    'https://i.pinimg.com/736x/79/fd/d1/79fdd17253b569a417e980a99aecd978.jpg';
  display() {
    this.isVisible = this.isVisible == true ? false : true;
    this.btnText = this.btnText == 'Show' ? 'Hide' : 'Show';

    let async = new SpeechSynthesisUtterance('User Clicked On button');
    window.speechSynthesis.speak(async);

    localStorage.setItem('name', JSON.stringify(this.obj));
  }
}
