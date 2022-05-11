import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Identity } from '../login/identities';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public signupForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      fullname: [''],
      lastname: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.http
      .post<Identity>(
        'http://localhost:5000/Identity/Register',
        this.signupForm.value
      )
      .subscribe(
        (res) => {
          alert('Signup Successfull!');
          this.signupForm.reset();
          this.router.navigate(['login-component']);
        },
        (err) => {
          alert('Someting went wrong');
        }
      );
  }
}
