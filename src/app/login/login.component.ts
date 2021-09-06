import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Observable, of } from 'rxjs';

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
  public loading$: Observable<boolean>;

  constructor(
    public readonly authservice: AuthService,

  ) { }

  public ngOnInit(): void {
  }
  public signIn() {
    this.loading$ = of(true);
    this.authservice.signIn(this.email.value, this.password.value).then(()=>{
      this.loading$ = of(false);
    })

  }
}
