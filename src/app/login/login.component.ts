import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email = new FormControl('', Validators.required);
  public password = new FormControl('', Validators.required);

  public userForm = new FormGroup({
    email: this.email,
    password: this.password,
  });

  constructor(
    public readonly authservice: AuthService,

  ) { }

  public ngOnInit(): void {
    //  console.log("login")
  }
  public signIn() {
    this.authservice.signIn(this.email.value, this.password.value)

  }
}
