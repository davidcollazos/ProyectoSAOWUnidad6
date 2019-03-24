import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../shared/authorization.service";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers:[AuthorizationService]
})
export class RegisterComponent implements OnInit {


  ngOnInit() {
   
  }
  confirmCode: boolean = false;
  codeWasConfirmed: boolean = false;
  error: string = "";
  roles : any[];
  roleRights : any[];
  RoleId:number
  
  constructor(private auth: AuthorizationService,
              private _router: Router) { }

  register(form: NgForm) {
 

    const email = form.value.email;
    const password = form.value.password;
    const name = form.value.name;
    const phone = form.value.phone;
    const address = form.value.address;
    //this.user.name=name;
    
    this.auth.register(email, password,name,address,phone).subscribe(
      (data) => {        
        this.confirmCode = true;
      },
      (err) => {
        console.log(err);
        //alert(err.message)
        this.error = err.message;
      }
    );
  }

  validateAuthCode(form: NgForm) {
    const code = form.value.code;
    
    this.auth.confirmAuthCode(code).subscribe(
      (data) => {
        //this._router.navigateByUrl('/');
        this.codeWasConfirmed = true;
        this.confirmCode = false;
      },
      (err) => {
        console.log(err);
        this.error = "Confirm Authorization Error has occurred";
      });
  }
 
}
