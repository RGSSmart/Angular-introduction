import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { LoginComponent } from './login/login.component';
import { OneUserComponent } from './one-user/one-user.component';

const routes: Routes = [
  
  {'path': 'user/:name', 'component': OneUserComponent},
  {'path': 'users', 'component': AllUsersComponent},
  {'path': 'form', 'component' : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
