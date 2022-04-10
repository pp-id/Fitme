import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  val!:any;
  constructor(private conn:ConnectService) { }

  ngOnInit(): void {

    this.conn.shareList.subscribe(data=>{
      this.val=data;
      this.conn.setList(data);
      this.val=this.conn.getList();
      console.log(this.val)
    })

  }

}
