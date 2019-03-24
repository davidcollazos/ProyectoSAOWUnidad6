import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { User } from '../../model/user';
import { AutorUser } from '../../model/autor';

//Change the following URL with your own API Gateway URL.
const API_URL:string = 'https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/publicaciones';
const API_URL_ID:string = 'https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/publicaciones/id';
const API_URL_AUTOR:string = 'https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/autores';
const API_URL_AUTOR_NO_AUTORIZADO='https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/autoresno-autorizados';
const API_URL_PUBLICACIONES_NO_AUTORIZADO='https://t3ewn5zs18.execute-api.eu-west-1.amazonaws.com/v1/publicaciones-nautorizados';
@Injectable()
export class UserDomainService {

  constructor(private http: HttpClient) { }
  //OBTENER PUBLICACIONES
  getUsers() {
    return this.http.get(API_URL);

  }
  getUsersNoAutorizado() {
    return this.http.get(API_URL_PUBLICACIONES_NO_AUTORIZADO);

  }

  //OBTENER AUTORES   
  getAutor() {
    return this.http.get(API_URL_AUTOR); 
  }
  getAutorNoAutorizado() {
    return this.http.get(API_URL_AUTOR_NO_AUTORIZADO); 
  }

//GUARDAR NUEVA PUBLICACION
  saveUser(user: User) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL, user, options);
  }

  //GUARDAR NUEVO AUTOR
  saveAutor(user: AutorUser) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL_AUTOR, user, options);
  }





//BORRADO PUBLICACION
  deleteUser(Userid: string) {
    return this.http.delete(API_URL_ID,
      {
        params: {
          "id": Userid
        }
      });
  }
  //BORRADO AUTOR
  deleteAutor(Userid2: string) {
    return this.http.delete(API_URL_AUTOR,
      {
        params: {
          "id": Userid2
        }
      });
  }
 
  //MODIFICAR PUBLICACION
  Modificar(user: User) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.put(API_URL, user, options);
  }

  //MODIFICAR AUTOR
  ModificarAutor(user: AutorUser) {
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let options = { headers: headers };
    return this.http.post(API_URL_AUTOR, user, options);
  }
   
 
}