import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskComponent } from './task/task.component';
import {AddTaskComponent} from './add-task/add-task.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'*',redirectTo:'login'},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'task',component:TaskComponent},
  {path:'task/:id',component:TaskComponent},
  {path:'taskadd',component:AddTaskComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
