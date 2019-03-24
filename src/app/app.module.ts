import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

import{appRoutes} from './routes'
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {AutoresComponent} from './autores/autores.component';
import {NewAutorComponent} from './new-autor/new-autor.component';
import {ModificarAutorComponent} from './modificar-autor/modificar-autor.component';
import {ArticulorevistaComponent} from './articulorevista/articulorevista.component';
import {NewPublicacionComponent} from './new-publicacion/new-publicacion.component';
import {ModificarPublicacionComponent} from './modificar-publicacion/modificar-publicacion.component';


import { Ng2SearchPipeModule } from 'ng2-search-filter'; //importing the module
import { Ng2OrderModule } from 'ng2-order-pipe'; //importing the module
import {NgxPaginationModule} from 'ngx-pagination';


import { SelectDropDownModule } from 'ngx-select-dropdown'//dropdown
import {DropdownModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastModule} from 'primeng/toast';



//Ngx-Charts
import {NgxChartsModule} from '@swimlane/ngx-charts';
import { UserDomainService } from './shared/Services/user-domain.service';
@NgModule({
  
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    LoginComponent,
    AutoresComponent,
    ArticulorevistaComponent,
    NewAutorComponent,
    ModificarAutorComponent,
    NewPublicacionComponent,
    ModificarPublicacionComponent
  ],
  imports: [
    BrowserModule,
    
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  //  AppRoutingModule,
  SelectDropDownModule,
  DropdownModule,
  BrowserAnimationsModule,
  ToastModule,
  NgxChartsModule
  ],
  providers: [UserDomainService],
  bootstrap: [AppComponent]
})
export class AppModule { }
