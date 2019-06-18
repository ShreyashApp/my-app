import { Component, OnInit } from '@angular/core';
import {TaskService} from 'src/app/task.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
 taskGroup = new FormGroup({
   taskdetails: new FormControl(''),
   datetime: new FormControl(''),
   quotename: new FormControl(''),
   typename: new FormControl(''),
   contact: new FormControl('')
 });
  
user$ ;
id;
editset;
updateset;
err;
selected=10;
key:string = 'ID';
reverse:boolean=false;
p:number=1;
  constructor(private task:TaskService,private http :HttpClient) { }

  ngOnInit() {
    this.editset = true;
    this.updateset = false;
   this.getTasks();
  }
  

  sort(key){
    this.key=key;
    this.reverse = !this.reverse;
  }

  getTasks(){
    this.task.getTask().subscribe((tsk)=> this.user$ = tsk);
  }

  addTask(){
    var taskdetail = (document.getElementById('taskdetails') as HTMLInputElement).value;
    var datetime = '2016-10-23 10:18:00.000'//(document.getElementById('datetime') as HTMLInputElement).valueAsDate;
    var quote =(document.getElementById('quotename') as HTMLInputElement).value;
    var type = (document.getElementById('typename') as HTMLInputElement).value;
    var contact = (document.getElementById('contact') as HTMLInputElement).value;
    console.log(taskdetail+datetime+quote+type+contact);
    this.task.createtask(taskdetail,datetime,quote,type,contact).subscribe(function(vals){
      console.log(vals);
    },error=>{console.log(error)});
    console.log(this.taskGroup.value);
    this.getTasks();
  }

  edit(taskid){
    this.id=taskid;
   this.editset=false;
   this.updateset=true;
   console.log(this.id);
  }
  delete(taskid){
    this.task.deleteTask(taskid).subscribe(function(bro){
      this.err=bro;
      return this.err;
    }.bind(this),error=>this.err=error )
  }

 update(taskid,taskdetails){
   this.id=taskid;
   console.log(taskdetails);
   this.editset=true;
   this.updateset = false;
   this.task.updatetask(taskdetails,taskid).subscribe(function(bro){
     this.err = bro;
    // this.getTasks();
     return this.err;
   }.bind(this),error => this.err = error);
 }


}
