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

  constructor() {}

  ngOnInit(): void {}
}
