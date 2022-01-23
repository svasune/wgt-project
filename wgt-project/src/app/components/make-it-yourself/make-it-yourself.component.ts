import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-make-it-yourself',
  templateUrl: './make-it-yourself.component.html',
  styleUrls: ['./make-it-yourself.component.css'],
})
export class MakeItYourselfComponent implements OnInit {
  title: string = 'Here you can find out how to make favorite dish yourself!';

  getStr(): string {
    return ' The most delicous ideas ever!';
  }

  constructor() {}

  ngOnInit(): void {}
}
