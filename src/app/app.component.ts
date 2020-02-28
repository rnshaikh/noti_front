import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { AppServiceService } from './app-service.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notification-front';
  identity = ""
  address = ""
  notification_messages = []
  
  constructor(
    public router: Router,
    private afMessaging: AngularFireMessaging,
    private appService :  AppServiceService
    ) {
  }
  requestPermission() {
    this.afMessaging.requestPermission
      .pipe(mergeMapTo(this.afMessaging.tokenChanges))
      .subscribe(
        (token) => {
          this.appService.postRegistrationToken(token,"prasad2").subscribe(
            (dt: any)=>{
              console.log('Permission granted! Save to the server!', dt);
            },
            (error) =>{
              alert(error)
            }
          )
          console.log(token);
        },
        (error) => { 
          console.error(error); },  
    );
    
  }
  listen(){
    this.afMessaging.messages.subscribe((message) => { 
      debugger; console.log(message); alert( JSON.stringify(message)) 
    });
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
          // this.router.navigate(["home"])
          this.afMessaging.messages.subscribe((message) => { 
            debugger; console.log(message); alert( JSON.stringify(message)) 
          });
        },
        (error) => { 
          console.error(error); },  
    );


  }
}
