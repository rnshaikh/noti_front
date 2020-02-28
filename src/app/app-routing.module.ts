import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {MatButtonModule,MatSnackBarModule} from '@angular/material';
import {IdentityComponent} from "./identity/identity.component";
const routes: Routes = [

  { path: "", component: IdentityComponent },
  { path: "home", component:HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
