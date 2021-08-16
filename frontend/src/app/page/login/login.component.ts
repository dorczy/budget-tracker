import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loggingIn: boolean = false;

  user: User = new User();
  serverError: string = '';

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(): void {
    this.authService.login(this.user).subscribe(
      user => {
        if (user) {
          this.router.navigate(['/']);
        }
      },
      err => {
        this.serverError = err.error.text;
        const to = setTimeout( () => {
          clearTimeout(to);
          this.serverError = '';
        }, 5000 )
      }
    );
  }

}
