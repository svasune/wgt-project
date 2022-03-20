import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-it-yourself',
  templateUrl: './make-it-yourself.component.html',
  styleUrls: ['./make-it-yourself.component.css'],
})
export class MakeItYourselfComponent implements OnInit {
  todayDate: number = Date.now();
  hour: number = Date.now();
  period: number = Date.now();

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  // calcInput: string = '0';
  // result: string = '0';
  // history: string[] = [];

  constructor() {}

  ngOnInit(): void {}

  countBmi() {
    var h = document.getElementById('h');
    var w = document.getElementById('w');
  }

  // add(): void {
  //   this.history.push(this.calcInput);
  //   this.calcInput = '' + (parseInt(this.result) + parseInt(this.calcInput));
  //   this.result = this.calcInput;
  // }

  // getValue(): number {
  //   return parseInt(this.calcInput);
  // }
}
