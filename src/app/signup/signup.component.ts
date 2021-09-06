import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Observable, of } from 'rxjs';

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
  public loading$: Observable<boolean>;


  constructor(
   public readonly authservice:AuthService
  ) { }

 public ngOnInit(): void {
  }
  public signUp(){
    this.loading$ = of(true);
    this.authservice.signUp(this.email.value ,this.password.value).then(()=>{
      this.loading$ = of(false);
    })

  }

}
