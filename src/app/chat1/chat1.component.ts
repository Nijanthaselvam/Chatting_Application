import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css']
})
export class Chat1Component implements OnInit {
  imagepath: any;
  senderName: string;
  constructor(private data: ChatserviceService) {
    this.imagepath = "../../assets/dp.jpg"
    this.senderName="Nijanthan"
   }

  ngOnInit(): void {
  }
  msgs:any=[];
  send(msg: any) {
    let msgObj = {
      senderName: this.senderName,
      msg:msg
    }
    this.msgs=this.data.chat(msgObj);
    
  }

}
