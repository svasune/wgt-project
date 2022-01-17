import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeItYourselfComponent } from './make-it-yourself.component';

describe('MakeItYourselfComponent', () => {
  let component: MakeItYourselfComponent;
  let fixture: ComponentFixture<MakeItYourselfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeItYourselfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeItYourselfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
