import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
   allowNewServer=false;
   createNewServer='no server was created!';
   serverName='serverName';
   serverCreated=false;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }
   onCreateMyNewServer(){
    //  this.createNewServer='new server is created!';
     this.serverCreated=true;

   }
 
}
