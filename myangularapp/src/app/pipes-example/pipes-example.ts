import {
  CurrencyPipe,
  DatePipe,
  JsonPipe,
  LowerCasePipe,
  PercentPipe,
  SlicePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true, // allow pipe to be imported directly
})
export class ReversePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) return '';
    return value.split('').reverse().join('');
  }
}

@Pipe({
  name: 'excerpt',
  standalone: true,
})
export class ExcerptPipe implements PipeTransform {
  transform(value: string, limit: number = 20): string {
    if (!value) return '';
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }
}

@Component({
  standalone: true,
  selector: 'app-pipes-example',
  imports: [
    ReversePipe,
    DatePipe,
    UpperCasePipe,
    TitleCasePipe,
    LowerCasePipe,
    CurrencyPipe,
    PercentPipe,
    SlicePipe,
    JsonPipe,
  ],
  templateUrl: './pipes-example.html',
  styleUrls: ['./pipes-example.css'],
})
export class PipesExample {
  title = 'pipes-demo';
  today = new Date();
  price = 2500;
  percentage = 0.89525;
  message = 'Angular Pipes Example';
  items = ['Angular', 'React', 'Vue'];

  student = {
    name: 'John Doe',
    age: 22,
    course: 'Computer Science',
  };
}
