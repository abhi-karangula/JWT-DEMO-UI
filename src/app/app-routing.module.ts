import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateComponent } from './authenticate/authenticate.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: 'authenticate',
    component: AuthenticateComponent
  },
  {
    path: "",
    redirectTo: 'authenticate',
    pathMatch: 'full'
  },
  {
    path: 'userList',
    component: UserListComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
