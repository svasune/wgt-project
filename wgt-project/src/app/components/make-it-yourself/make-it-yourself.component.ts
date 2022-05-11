import { Component, OnInit } from '@angular/core';
import {
  NgxQrcodeElementTypes,
  NgxQrcodeErrorCorrectionLevels,
} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-make-it-yourself',
  templateUrl: './make-it-yourself.component.html',
  styleUrls: ['./make-it-yourself.component.css'],
})
export class MakeItYourselfComponent implements OnInit {
  // clock
  todayDate: number = Date.now();
  hour: number = Date.now();
  period: number = Date.now();

  // BMI counter BMI = kg/m2
  kg: number | undefined;
  m: number | undefined;

  // QR code
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value = 'https://www.9gag.com/';

  constructor() {}

  ngOnInit(): void {}

  myBmi() {
    return (Number(this.kg) / (Number(this.m) * Number(this.m))) * 10000;
  }
}
