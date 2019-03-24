import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { UserDomainService } from '../shared/Services/user-domain.service';
import { AuthorizationService,Callback } from '../shared/authorization.service';
import { User } from '../model/user';




@Component({
  selector: 'app-articulorevista',
  templateUrl: './articulorevista.component.html',
  styleUrls: ['./articulorevista.component.css']
})
export class ArticulorevistaComponent {
  title = 'serverless';
  constructor(private userService: UserDomainService, private router:Router, private auth: AuthorizationService) { }
  public users;
  user: User;
  ngOnInit() {
    this.loadUsers();
    this.user = new User();
  }

  private loadUsers() {
    if(this.auth.isLoggedIn!=null){
    this.userService.getAutor().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
    }else {
      console.log("NO VERAS NADA SI NO ESTAS LOGEADO");
      this.userService.getAutorNoAutorizado().subscribe(
        data => { this.users = data },
        err => console.error(err),
        () => console.log("users loaded.")
      );
    }
  }
  
  deleteUser(id: string) {
   
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  


}