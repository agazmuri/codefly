import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  email : string;
  password : string;

  constructor(public userService : UserService ) {
    this.email = "";
    this.password = "";
   }

  ngOnInit(): void {
  }

  login(){

    const user = {email: this.email, password: this.password};
    this.userService.login(user).subscribe(data =>{
      console.log(data.token);
    })

  console.log(this.email);
  
  }

}
