import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http'
import { observable } from 'rxjs';
import { ɵangular_packages_platform_browser_platform_browser_d } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  url;
  constructor(private http :HttpClient) { 
    this.url = 'http://localhost:3441/';
  }

  getTask(){
  //  var head = new HttpHeaders({'Authorization': ' Bearer '+localStorage.getItem('sessionkey')});
    return this.http.get(this.url+'TaskVals');
  }
  body;
  GetUser(username:string,password:string){
    this.body ='username='+username+'&password='+password+'&grant_type=password';
    var head = new HttpHeaders({'Access-Control-Allow-Origin':'*','Content-Type': 'application/x-www-form-urlencoded'});
    var text ;
    return this.http.post(this.url+'Token',this.body,{headers:head});
  //  console.log(text+"hey");
    
  }

  deleteTask(id :number){
    //  var head = new HttpHeaders({'Authorization': ' Bearer '+localStorage.getItem('sessionkey')});
      return this.http.post(this.url+'DeleteTask?id='+id,null);
    }

  updatetask(details:string,id :number){
    return this.http.post(this.url+'UpdateTask?task_details='+details+'&id='+id,null);
  }

  createtask(task_details:string,DateTime:string,quotename:string, typename:string, contact:string){
    return this.http.post(this.url+'InsertTask?task_details='+task_details+'&dt='+DateTime+'&quotename='+quotename+'&typename='+typename+'&contact='+contact,null);
  }

}
