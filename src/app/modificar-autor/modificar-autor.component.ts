import { Component, OnInit } from '@angular/core';
import { UserDomainService } from '../shared/Services/user-domain.service';
import { AutorUser } from '../model/autor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-autor',
  templateUrl: './modificar-autor.component.html',
  styleUrls: ['./modificar-autor.component.css']
})
export class ModificarAutorComponent implements OnInit {

  public users;
  user: AutorUser;

  constructor(private userService: UserDomainService,
    private router: Router) { }

  ngOnInit() {
    this.loadUsers();
    this.user = new AutorUser();
    
  }

  private loadUsers() {
    this.userService.getAutor().subscribe(
      data => { this.users = data },
      err => console.error(err),
      () => console.log("users loaded.")
    );
  }

  ModificarAutor() {
    this.userService.ModificarAutor(this.user).toPromise().then(() => {
      this.router.navigate(['autores']);
    });
  }

}
