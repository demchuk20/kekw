import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../services/login.service';
import {TaskService} from '../../services/task.service';
import {Task} from '../../models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  public url: string;
  public convertedImage: any;

  constructor(private router: Router,
              private taskService: TaskService,
              private loginService: LoginService
  ) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('isLogged') === 'false') {
      this.router.navigate(['/sign-in']);
    }
  }

  create_task() {
    console.log(this.url);
    this.loginService.getInfo().subscribe((o: any) => {
      console.log(o);
    });
    this.taskService.create_task(this.url).subscribe((task: Task) => {
      console.log(task);
      this.convertedImage = 'data:image/jpeg;base64,' + task.image;
    });
  }
}
