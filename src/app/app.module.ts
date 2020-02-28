import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { HttpClientModule } from "@angular/common/http";
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {environment} from "./environment";
import { FormsModule }   from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { IdentityComponent } from './identity/identity.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule,MatSnackBarModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IdentityComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireMessagingModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
