import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { first } from "rxjs/operators";


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  public isLoggedIn: boolean;
  constructor(
    public readonly authservice: AuthService,


  ) { }

  public ngOnInit(): void {
    this.authservice.isLoggedIn().pipe(
      first()
    ).subscribe((user) => {
      // console.log(user+"jjjh")
      user ? this.isLoggedIn === true : this.isLoggedIn === false;
    })
  }

  public signOut() {
    this.authservice.signOut();

  }

}
