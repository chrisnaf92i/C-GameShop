import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  userName!:string;
  userEmail!:string;
  userDeliveryAdress!:string;
  userPassword!:string;

  constructor (private _httpClient:HttpClient, private router:Router) {

  }

  ngOnInit(): void {
  }


  onSubmitSignInForm () {
    this._httpClient.post("http://localhost:3000/api/signin", {
      userName:this.userName,
      email:this.userEmail,
      delivaryAdress:this.userDeliveryAdress,
      password:this.userPassword
    })
      .subscribe({next: response => {
        console.log("création du compte")
        this.router.navigateByUrl("login")
      },
      error: error => {
        console.error(error)
      }
    })
  }
}
