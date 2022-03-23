import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode/public-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  color = '#023E41';
  weight = '900';

  constructor() {}

  ngOnInit(): void {}
}
