import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
  styles:[`
  .text{
    color:white
  }`]
})
export class DirectivesComponent implements OnInit {
  showSecret=false;
  log=[];
  constructor() { }
 
  ngOnInit(): void {
  }

  onDisplay(){
    this.showSecret=true;
  }
  onToggle(){
    this.showSecret=!this.showSecret;
    this.log.push(this.log.length+1);
    
  }
}
