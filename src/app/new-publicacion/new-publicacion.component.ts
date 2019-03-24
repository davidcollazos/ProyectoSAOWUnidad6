import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDomainService } from '../shared/Services/user-domain.service';
import { User } from '../model/user';

@Component({
  selector: 'app-new-publicacion',
  templateUrl: './new-publicacion.component.html',
  styleUrls: ['./new-publicacion.component.css']
})
export class NewPublicacionComponent implements OnInit {

  user: User;

  constructor(private userService: UserDomainService,
    private router: Router) { }

  ngOnInit() {
    this.user = new User();
  }

  saveUser() {
    this.userService.saveUser(this.user).toPromise().then(() => {
      this.router.navigate(['articulorevista']);
    });
  }

}
