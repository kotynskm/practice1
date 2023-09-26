import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private apiService: ApiService) {}

  title = 'practice1: property binding vs string interpolation';
  data = 'this is a string of data';
  number = 10;
  isButtonDisabled = true;
  inputWord = '';
  username = '';
  displayDetails = false;
  btnClicks: string[] = [];
  evenNums: number[] = [];
  oddNums: number[] = [];

  displayArticle() {
    this.apiService
      .callArticleEndpoint()
      .subscribe((data) => console.log(data));
  }

  displayNumber() {
    return this.number;
  }

  displayWord() {
    this.inputWord = 'Your word is: ' + this.inputWord;
  }

  getInput(event: Event) {
    this.inputWord = (<HTMLInputElement>event.target).value;
  }

  setUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  displayBtn() {
    this.displayDetails
      ? (this.displayDetails = false)
      : (this.displayDetails = true);
    this.btnClicks.push('Button Clicked');
  }

  onIntervalFired(number: number) {
    if (number % 2 === 0) {
      this.evenNums.push(number);
    } else {
      this.oddNums.push(number);
    }
  }
}
