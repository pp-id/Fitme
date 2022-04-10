import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  display!:number;
  stopAt!:any;
  flagPause:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  startTimer(n:any){
   clearInterval(this.stopAt)
   this.display=n;
  if(this.flagPause){
   this.stopAt= setInterval(()=>{
    if(this.flagPause && this.display>0)
      this.display=this.display-1;

    }, 1000)
  }
  }

  stopTimer(){
    clearInterval(this.stopAt)
    this.display=0;
  }

  pauseTimer(){
    this.flagPause=!this.flagPause;


  }

}
