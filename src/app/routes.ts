import { Routes } from '@angular/router'
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import {ArticulorevistaComponent} from './articulorevista/articulorevista.component';

import {AutoresComponent} from '../app/autores/autores.component'
import { NewAutorComponent } from './new-autor/new-autor.component';
import { ModificarAutorComponent } from './modificar-autor/modificar-autor.component';
import { NewPublicacionComponent } from './new-publicacion/new-publicacion.component';
import { ModificarPublicacionComponent } from './modificar-publicacion/modificar-publicacion.component';

export const appRoutes: Routes = [
    
    {path: 'Home', component: HomeComponent},  
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent},
    { path: 'autores', component: AutoresComponent},
    { path: 'new-autor', component: NewAutorComponent},
    { path: 'modificar-autor', component: ModificarAutorComponent},
    { path: 'articulorevista', component: ArticulorevistaComponent},
    { path: 'new-publicacion', component: NewPublicacionComponent},
    { path: 'modificar-publicacion', component: ModificarPublicacionComponent}


    
   
  
    
];