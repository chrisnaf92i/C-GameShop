import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userEmail!:string;
  userPassword!:string;
  errorMessage!:string;
  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
    console.log(this.errorMessage)
  }

  onSubmitLogin() {
    this.httpClient.post("http://localhost:3000/api/login", {email:this.userEmail, password:this.userPassword})
      .subscribe({
        next: response => {
          localStorage.setItem("user", JSON.stringify(response));

        },
        error: error => {
          this.errorMessage = error.error;
        }
      })
  }

}
