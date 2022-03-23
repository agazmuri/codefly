import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email : string;
  public password : string;
  public confirmarPassword : string;

  constructor() { 
    this.email = "";
    this.password = "";
    this.confirmarPassword = "";
  }

  ngOnInit(): void {
  }

  registrar(){
    console.log(this.email);
    console.log(this.password);
  }

}

