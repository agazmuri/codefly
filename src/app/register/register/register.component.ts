import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public email : string;
  public password : string;
  public confirmarPassword : string;
  public passwordError : boolean; 

  constructor(public userService : UserService) { 
    this.email = "";
    this.password = "";
    this.confirmarPassword = "";
    this.passwordError = false;

  }

  ngOnInit(): void {
  }

  registrar(){
    const user = {email : this.email, password : this.password };
    this.userService.register(user).subscribe(data => {
      console.log(data);
    })   
  }

}

