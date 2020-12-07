import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLogged') === 'true') {
      this.router.navigate(['/task']);
    } else {
      localStorage.setItem('isLogged', 'false');
      localStorage.setItem('refresh', '');
      localStorage.setItem('access', '');
    }
  }

  login() {
    this.loginService.login(this.email, this.password).subscribe((token) => {
      localStorage.setItem('refresh', token.refresh);
      localStorage.setItem('access', token.access);
      this.router.navigate(['/task']);
    });
  }
}
