import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDomainService } from '../shared/Services/user-domain.service';
import { AutorUser } from '../model/autor';

@Component({
  selector: 'app-new-autor',
  templateUrl: './new-autor.component.html',
  styleUrls: ['./new-autor.component.css']
})
export class NewAutorComponent implements OnInit {

  user: AutorUser;

  constructor(private userService: UserDomainService,
    private router: Router) { }

  ngOnInit() {
    this.user = new AutorUser();
  }

  saveAutor() {
    this.userService.saveAutor(this.user).toPromise().then(() => {
      this.router.navigate(['autores']);
    });
  }

}
