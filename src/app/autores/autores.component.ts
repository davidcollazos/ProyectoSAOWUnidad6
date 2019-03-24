import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDomainService } from '../shared/Services/user-domain.service';
import { AutorUser } from '../model/autor';
import { AuthorizationService,Callback } from '../shared/authorization.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css'],
  providers:[AuthorizationService]
})
export class AutoresComponent implements OnInit {
 
 
  bAuthenticated = false;
val:any;


  constructor(private userService: UserDomainService, public router: Router, private auth: AuthorizationService) { 
  
    

}
  public users;
  user: AutorUser;


  ngOnInit() {
   
    this.loadUsers();
    this.user = new AutorUser();
    
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
  
  deleteAutor(id: string) {
   
    this.userService.deleteAutor(id).subscribe(() => {
      this.loadUsers();
    });
  }
  

  
  
  

}
