import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../shared/authorization.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ChallengeParameters, CognitoCallback, LoggedInCallback } from "../shared/Shared";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[AuthorizationService]
})
export class LoginComponent implements CognitoCallback,OnInit {
  email: string;
  password: string;
  errorMessage: string;
  mfaStep = false;
  mfaData = {
      destination: '',
      callback: null
  };

  ngOnInit() {
  }
  emailVerificationMessage: boolean = false;

  constructor(private auth: AuthorizationService,
              private _router: Router) {

  }

  onSubmit(form: NgForm) {

    const email = form.value.email;
    const password = form.value.password;
    
  

    this.auth.authenticate(email, password, this);

  }


  cognitoCallback(message: string, result: any) {

alert(message)


    if (message != null) { //error
        this.errorMessage = message;
        console.log("result: " + this.errorMessage);
        if (this.errorMessage === 'User is not confirmed.') {
          alert('a')
            console.log("redirecting");
            this._router.navigate(['/confirm', result]);
        } else if (this.errorMessage === 'User needs to set password.') {
         alert('a')
            console.log("redirecting to set new password");
            this._router.navigate(['/newpassword']);
        }
    } else { //success
        //this.ddb.writeLogEntry("login");
        this._router.navigate(['/Home']);
        
    }
}
}
