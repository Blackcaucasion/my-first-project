import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  public  email = new FormControl('',Validators.required);
  public  password = new FormControl('',Validators.required);

 public  userForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(
   public readonly authservice:AuthService
  ) { }

 public ngOnInit(): void {
   console.log("signUP")
  }
  public signUp(){
    this.authservice.signUp(this.email.value ,this.password.value);

  }

}
