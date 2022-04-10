import { Component, OnInit } from '@angular/core';
// import { connect } from 'http2';
import { ConnectService } from 'src/app/connect.service';


@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css']
})
export class ExerciseListComponent implements OnInit {
  // data:any[]=["push ups", "squats","kuch bhi krle","shirsashan", "mandukasan","bhastrika"];
  data:any[]=[
    {id:0,exercise:"push ups"},
    {id:1,exercise:"squats"},
    {id:2,exercise:"shirsasan"}
]
  peepsSelect:any;
  flagSave:boolean=false;
  exercisePerformed:any[]=[];
  listVal!:any;

  constructor(private conn: ConnectService) { }

  ngOnInit(): void {
    console.log(this.peepsSelect);
    console.log(this.data)
    this.conn.shareList.subscribe(d=>{
      this.listVal=d;
      console.log("listVal",this.listVal)
    })


  }

  selectChange(){
    console.log("after",this.peepsSelect)                  //it is the selected exercise to be added for timer
    this.conn.shareExercise(this.peepsSelect)
    this.flagSave=true;
  }

}
