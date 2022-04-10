import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ConnectService } from 'src/app/connect.service';

@Component({
  selector: 'app-save-timer',
  templateUrl: './save-timer.component.html',
  styleUrls: ['./save-timer.component.css']
})
export class SaveTimerComponent implements OnInit {
  list:any[]=[]
  exercise!:string;

  constructor(private conn:ConnectService) { }

  ngOnInit(): void {

    this.conn.shareList.subscribe((data:any)=> {
      this.list=data;
      console.log("list is*****************************", this.list)
    })

    this.conn.exerciseName.subscribe(ex=> {
      this.exercise=ex;
    })

  }

  saveTimer(){
    console.log("exercise name",this.exercise)
    let e=this.exercise
    console.log("list is", this.list)
    this.list.push(e)
    console.log("nside save",this.conn.shareList)
    this.conn.shareListData(this.list)
  }

  cancelSave(){

  }

}
