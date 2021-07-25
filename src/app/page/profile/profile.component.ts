import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() title: string = 'Profil módosítása';
  @Input() registration: boolean = false;

  loggingIn: boolean = false;

  user: User = {
    id: 0,
    name: 'Anya',
    email: 'anya@gmail.com',
    password: 'AnyaJelszo',
    role: 'admin',
    age: 40,
  };

  constructor() { }

  ngOnInit(): void {
  }

  login(loginForm: NgForm, user: User): void {
    this.loggingIn = true;
    console.log("Logging in...");
    console.log(user);
  }

}
