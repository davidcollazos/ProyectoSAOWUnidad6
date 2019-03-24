import { Component, OnInit } from '@angular/core';
import { AuthorizationService,Callback } from '../shared/authorization.service';
import {AuthenticationDetails, CognitoUser, CognitoUserPool, CognitoUserAttribute} from 'amazon-cognito-identity-js';
import { Http, Headers } from "@angular/http";
import { applySourceSpanToStatementIfNeeded } from '@angular/compiler/src/output/output_ast';

import { environment } from "../../environments/environment";
import {Stuff} from './../shared/Shared'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[AuthorizationService]
})
export class HomeComponent implements OnInit{
    public stuff: Stuff = new Stuff();
 
  bAuthenticated = false;
val:any;

name:string;
public parameters: Array<Parameters> = [];
  constructor(public router: Router, private auth: AuthorizationService) { 
  
    this.auth.isAuthenticated(this);
    console.log("in JwtComponent");

}

isLoggedIn(message: string, isLoggedIn: boolean) {


  if (!isLoggedIn) {
      this.router.navigate(['/home/login']);
  } else {
      this.auth.getAccessToken(new AccessTokenCallback(this));
      this.auth.getIdToken(new IdTokenCallback(this));
  }
}
  

  ngOnInit() {

    //this.auth.UpdateloggedinUser(); 
    //this.auth.DeviceList();
    
    var authenticatedUser = this.auth.getAuthenticatedUser();
    if (authenticatedUser == null) {
      return;
    }

    
    this.bAuthenticated = true;

    this.getParameters(new GetParametersCallback(this));
  
  }

 getParameters(callback: Callback) {
  const poolData = {
    UserPoolId: environment.userPoolId, // Your user pool id here
    ClientId:  environment.clientId // Your client id here  
  };
  
  const userPool = new CognitoUserPool(poolData);
   let cognitoUser = userPool.getCurrentUser();
  if (cognitoUser != null) {
      cognitoUser.getSession(function (err, session) {
          if (err)
              console.log("UserParametersService: Couldn't retrieve the user");
          else {
              cognitoUser.getUserAttributes(function (err, result) {
                  if (err) {
                      console.log("UserParametersService: in getParameters: " + err);
                  } else {
                      callback.callbackWithParam(result);
                  }
              });
          }

      });
  } else {
      callback.callbackWithParam(null);
  }


}

}
export class Parameters {
  name: string;
  value: string;
}

export class GetParametersCallback implements Callback {

  constructor(public me: HomeComponent) {

  }

  callback() {

  }

  callbackWithParam(result: any) {
//alert(result)
      for (let i = 0; i < result.length; i++) {
          let parameter = new Parameters();
          parameter.name = result[i].getName();
          parameter.value = result[i].getValue();
          this.me.parameters.push(parameter);
      }
  //    alert(result)
      let param = new Parameters()
      param.name = "Id Token";
      param.value = this.me.stuff.idToken ;
      this.me.parameters.push(param)

      localStorage.setItem('userToken',this.me.stuff.idToken)
  }
}

export class AccessTokenCallback implements Callback {
    constructor(public jwt: HomeComponent) {
  
    }
  
    callback() {
  
    }
  
    callbackWithParam(result) {
        this.jwt.stuff.accessToken = result;
    }
  }
  
  export class IdTokenCallback implements Callback {
    constructor(public jwt: HomeComponent) {
  
    }
  
    callback() {
  
    }
  
    callbackWithParam(result) {
        this.jwt.stuff.idToken = result;
        
    }
  }
  