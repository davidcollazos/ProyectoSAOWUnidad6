import { Component, OnInit } from '@angular/core';
import { UserDomainService } from '../shared/Services/user-domain.service';
import { User } from '../model/user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modificar-publicacion',
  templateUrl: './modificar-publicacion.component.html',
  styleUrls: ['./modificar-publicacion.component.css']
})
export class ModificarPublicacionComponent{

  public users;
  user: User;

  constructor(private userService: UserDomainService,
    private router: Router) { }

  ngOnInit() {
    this.loadUsers();
    this.user = new User();
    
  }

  private loadUsers() {
    this.userService.getUsers().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
  }

  Modificar() {
    this.userService.Modificar(this.user).toPromise().then(() => {
      this.router.navigate(['articulorevista']);
    });
  }

  
 


}
