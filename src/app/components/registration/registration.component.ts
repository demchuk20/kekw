import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public email: string;
  public password: string;
  public lastName: string;
  public firstName: string;

  constructor(
    private router: Router,
    private loginService: LoginService) {
  }

  ngOnInit(): void {
  }

  register() {
    let user = new User();
    user.email = this.email;
    user.password = this.email;
    user.first_name = this.firstName;
    user.last_name = this.lastName;
    this.loginService.register(user).subscribe(() => {
      this.router.navigate(['/sign-in']);
    });
  }

}
