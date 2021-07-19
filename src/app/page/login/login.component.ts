import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggingIn: boolean = false;

  user: { email: string, password: string } = {
    email: "ex@gmail.com",
    password: "example"
  };

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm, user: { email: string, password: string }): void {
    console.log("Logging in...");
    console.log(user);
    this.loggingIn = true;
  }

}
