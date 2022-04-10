import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ConnectService {
  sharelistVar!:any;
  constructor(http:HttpClient) {}


  public shareList = new Subject();
  public exerciseName = new BehaviorSubject('No Exercise selected');

  shareListData(data:any[]){
    this.shareList.next(data)
  }

  shareExercise(name:string){
    this.exerciseName.next(name)
  }

  setList(val:any){
    this.sharelistVar=val;
  }
  getList(){
    return this.sharelistVar;
  }


}
