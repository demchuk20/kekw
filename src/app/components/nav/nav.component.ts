import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isLogged: boolean;

  constructor(
    private router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLogged') === 'true') {
      this.isLogged = true;
    }
  }

  exit() {
    localStorage.setItem('isLogged', 'false');
    localStorage.setItem('refresh', '');
    localStorage.setItem('access', '');
    this.router.navigate(['/login']);
  }

}
