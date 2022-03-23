import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dark-mode-toggle',
  template: `
    <mat-slide-toggle
      mat-button
      id="darkMode"
      [checked]="darkMode$ | async"
      (change)="onToggle()"
      class="toggle"
    >
    </mat-slide-toggle>
  `,
})
export class DarkModeToggleComponent {
  readonly darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  onToggle(): void {
    this.darkModeService.toggle();
  }
}
