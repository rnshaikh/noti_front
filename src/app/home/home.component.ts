import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { AppServiceService } from '../app-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  notification1 = true;
  notification2 = true;
  notification3 = true;

  notifications = '';

  // @Input() addMessage = '';

  constructor(private appService :  AppServiceService) {

    this.appService.notificationData.subscribe((dt:any)=>{
      this.notifications = dt;
    })


  }

  ngOnInit() {

    this.notification1= true;
    this.notification2 = true;
    this.notification3 = true;

    
  }

  // ngOnChange(){
  //   console.log("home", this.addMessage);
  // }

  notificationformsumbit(notificationtypeForm){

    this.appService.changeNotificationSettings(this.notification1, this.notification2,this.notification3).subscribe(
      (dt: any)=>{
        console.log('notification settings changed successfully', dt);
      },
      (error) =>{
        alert(error)
      }
    )
    alert("notification settings changed successfully")
  }

}
