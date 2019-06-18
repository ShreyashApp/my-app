import { Component, OnInit } from '@angular/core';
import {Log} from 'src/app/log';
import { _document } from '@angular/platform-browser/src/browser';
import {TaskService} from '../task.service';
import { JsonPipe } from '@angular/common';
import {Router} from "@angular/router";
import {Login} from "./Login";
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private task:TaskService) { }
login = Login;
loginform= new FormGroup({
  'loginname':new FormControl(this.login.prototype.loginname),
  'password': new FormControl(this.login.prototype.password)
});
  ngOnInit() {
  localStorage.removeItem("sessionkey");
  }
username ='';
password = '';
text;
mod = new Log("sam","sam");

  public submit() {
    console.log(this.loginform.value);
    /*this.username = (document.getElementById('user') as HTMLInputElement).value;
    this.password = (document.getElementById('pass') as HTMLInputElement).value;
    this.task.GetUser(this.username,this.password).subscribe(function(tsk){
      this.text  = tsk['access_token'];
      localStorage.setItem('sessionkey',this.text);
      console.log("Authorization: Bearer ",localStorage.getItem('sessionkey'));
     },error => this.text = error['error']
    );
    if(this.text){
      this.router.navigateByUrl('/task');
    }*/
   }

}

