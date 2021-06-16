import { Component} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { NgModule } from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
    .online{
     color:white;
    }`]
    
})

export class ServerComponent{
  serverId:number=5;
  serverStatus:string='offline';
  eventValue='';
  eventValueTwoWayBind='Hello Jack';
  constructor(){
    this.serverStatus=Math.random()>0.5?'online':'offline';
  }
  
  onUpdateServerName(event:any){
      this.eventValue=(<HTMLInputElement>event.target).value;
      //this.eventValueTwoWayBind=(<HTMLInputElement>event.target).value;

  }
  getColor(){
    return this.serverStatus==='online'?'green':'red';
  }
}