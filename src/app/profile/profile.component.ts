import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';
import { Employee } from '../shared/models/employee';
import { QueryService } from '../shared/services/query.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit {
  public firstName = new FormControl('', Validators.required);
  public lastName = new FormControl('', Validators.required);
  public emailAddress = new FormControl('', Validators.required);
  public employeeNumber = new FormControl('', Validators.required);
  public department = new FormControl('');
  public role = new FormControl('');

  public profileForm = new FormGroup({
    firstName: this.firstName,
    lastName: this.lastName,
    emailAddress: this.emailAddress,
    employeeNumber: this.employeeNumber,
    department: this.department,
    role: this.role,
  })
  public employee: Employee;
  // Roles
  Roles: any = ["admin", "manager"];

  constructor(
    private readonly authservice: AuthService,
    private readonly queryservice: QueryService,
    public dataservice: DataService,
    private readonly changeDetectionRef: ChangeDetectorRef

  ) {

  }

  public ngOnInit() {
    //get user and patch form
    this.authservice.isLoggedIn()
      .subscribe((val) => {

        // update form
        this.queryservice.getEmployee(val?.uid).subscribe(
          (vals: any) => {

            // console.log(vals.payload.data())
            this.employee = vals.payload.data() as Employee
            this.profileForm.patchValue({
              emailAddress: this.employee?.personalDetails?.email,
              firstName: this.employee?.personalDetails?.firstName,
              lastName: this.employee?.personalDetails?.lastName,
              employeeNumber: this.employee?.personalDetails?.employeeNumber,
              department: this.employee?.personalDetails?.department,
              role: this.employee?.personalDetails?.role
            })
            this.changeDetectionRef.detectChanges();
          }
        );

      })


  }
  // Choose role
  public switchRole(event: any) {
    this.role.setValue(event.target.value, {
      onlySelf: true
    })
  }

  //update profile
  public saveProfile() {
    this.queryservice.updateEmployee({
      uid: this.employee.uid,
      personalDetails: {
        email: this.emailAddress.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        employeeNumber: this.employeeNumber.value,
        department: this.department.value,
        role: this.role.value
      }
    })
  }


}

