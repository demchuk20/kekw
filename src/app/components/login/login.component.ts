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

  // "id": 15,
  // "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTYwNDQ0Nzg1MywianRpIjoiYzI5NzFmZGU4NWFlNGUyYzg3YTk0MjNiNjM3ZmE4ZWYiLCJ1c2VyX2lkIjoxNX0.DEw9gWtp4NUkGZpkCuCdOKtxA4L8pNrUTkjUbyq97kU",
  // "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjA0NDQ3ODUzLCJqdGkiOiI0OGY3NjlkMTdlMDM0YjQyOTY0MjY3NjBkMDQ0OWJmOCIsInVzZXJfaWQiOjE1fQ.D3Ziis-9DYIfJkEwuybx5R4gSbZDFqpMz7ZnbetkcIg",
  // "email": "user23@user.com" 1234qwer,
  // "password": "pbkdf2_sha256$216000$Zs2Vz2j4MnE4$MiNHPSOYQzFI8s3h4KDgfSF0cveX5M/PQdNOOy1NP0A=",
  // "first_name": "user",
  // "last_name": "user",
  // "is_active": true
  login() {
    this.loginService.login(this.email, this.password).subscribe((token) => {
      localStorage.setItem('refresh', token.refresh);
      localStorage.setItem('access', token.access);
      this.router.navigate(['/task']);
    });
  }
}
