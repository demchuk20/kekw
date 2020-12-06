import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {TaskComponent} from './components/task/task.component';

const routes: Routes = [
  {path: "sign-up", component: RegistrationComponent},
  {path: "sign-in", component: LoginComponent},
  {path: 'task', component: TaskComponent},
  {path: '**', component: LoginComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
