import { Component, OnInit,Output, Input,EventEmitter} from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { AppServiceService } from '../app-service.service';
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";


@Component({
  selector: 'app-identity',
  templateUrl: './identity.component.html',
  styleUrls: ['./identity.component.css']
})
export class IdentityComponent implements OnInit {

  identity = ""
  address = ""
  messages = [];

  constructor(
    public router: Router,
    private afMessaging: AngularFireMessaging,
    private appService :  AppServiceService,
    readonly snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
  }

  identityFormSubmit(signinForm){

    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          this.appService.postRegistrationToken(this.identity,token).subscribe(
            (dt: any)=>{
              console.log('Permission granted! Save to the server!', dt);
            },
            (error) =>{
              alert(error)
            }
          )
          alert("Identity created successfully");
          localStorage.setItem("Identity", this.identity);
        },
        (error) => { 
          console.error(error); },  
    );
    this.messages = [];
    this.afMessaging.messages.subscribe((message) => { 
      console.log(message);
      //this.messages.push(message['data']['twi_body'])
      this.appService.notificationData.next(message['data']['twi_body'])
      //this.addMessage.emit(message['data']['twi_body'])
      this.snackBar.open(message['data']['twi_body'],'Close', {
        duration: 2000,
     });

    });
    this.router.navigate(["home"])

  }
}