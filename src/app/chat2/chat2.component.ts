import { Component, OnInit } from '@angular/core';
import { ChatserviceService } from '../chatservice.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {

  imagepath: any;
  senderName: string;
  constructor(private data: ChatserviceService) {
    this.senderName = "Bharath"
    this.imagepath = "../../assets/dp2.jpg"
  }

  ngOnInit(): void {
  }
  msgs: any = [];
  send(msg: any) {
    let msgObj = {
      senderName: this.senderName,
      msg:msg
    }
    this.msgs=this.data.chat(msgObj);
    
  }

}
