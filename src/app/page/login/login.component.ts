import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggingIn: boolean = false;

  user: { email: string, password: string } = {
    email: "",
    password: ""
  };

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm, user: { email: string, password: string }): void {
    console.log("Logging in...");
    console.log(user);
    this.loggingIn = true;
    this.router.navigate([""]);
  }

}
