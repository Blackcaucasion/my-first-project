import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Employee } from '../models/employee';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { DataService } from './data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public angufireauth: AngularFireAuth,
    public angularfirestore: AngularFirestore,
    public dataservice: DataService,
    public router: Router,
    public toastr: ToastrService,



  ) {

  }

  public async signUp(email: string, password: string) {
    return await this.angufireauth.createUserWithEmailAndPassword(email, password).then((res) => {
      if (res) {
        this.toastr.success("successfully registered!");

        this.router.navigate(['login']);

      }
    }).catch((err: any) =>
      // console.log(err)
      this.toastr.error(err.message)
    )
  }

  public async signIn(email: string, password: string) {
    return await this.angufireauth.signInWithEmailAndPassword(email, password).then((res) => {


      // firebase custom setCustomUserClaims
      // check if user is new and initialice doc collection 
      this.initCollection(res.user as {})
      this.toastr.success("successfully Logged!");


      this.router.navigate(['my-profile']);

    }).catch((err) => {
      this.toastr.error(err.message)

    }
    )
  }
  //logout user
  public async signOut() {
    return this.angufireauth.signOut().then(() => {
      this.router.navigate(['']);
    });

  }

  public initCollection(res: any) {
    console.log(res?.uid)

    const docRef: AngularFirestoreDocument<Employee> = this.angularfirestore.collection('employees').doc(`${res?.uid}`)
    docRef.ref.get().then((doc) => {
      if (doc.exists) {
        // console.log("not a new user")
      }
      else {
        // initialize doc 
        const data = {
          uid: res.uid,
          personalDetails: {
            email: res.email,
            firstName: null,
            lastName: null,
            password: null,
            employeeNumber: null,
            department: null,
            role: null,
            profileUrl: null
          }

        }
        docRef.set(data, { merge: true }).then(() => console.log(`employee ${data.uid} was created`))
      }
    })

  }


//get logged in user
  public isLoggedIn() {
    return this.angufireauth.user;
  }

  public getLoggedState() {
    return this.angufireauth.authState.subscribe((user) => {
      this.dataservice.setLoginState(user)
    })
  }

}
