import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {RegisterComponent} from "./register/register.component";
import { HomeComponent } from './home/home.component';
import {ArticulorevistaComponent} from './articulorevista/articulorevista.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},  
  //{path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  //{path: 'restapi', component: RestApiComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
