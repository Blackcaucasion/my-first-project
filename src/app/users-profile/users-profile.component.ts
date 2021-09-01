import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { QueryService } from '../shared/services/query.service';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Employee } from '../shared/models/employee';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersProfileComponent implements OnInit {

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
  public employee:Employee;
  // Roles
  Roles: any = ["admin", "manager"];
  constructor(
    public queryservice:QueryService,
    public route: ActivatedRoute,
    private readonly changeDetectionRef: ChangeDetectorRef

  ) { }

 public ngOnInit(): void {
  this.route.paramMap.subscribe(params => {
    console.log(params)
    const paramKey = params.get('id') as string
    this.getUser(paramKey)
  })
   
  }
  public getUser(uid:string){
  
    this.queryservice.getEmployee(uid).subscribe(
      (vals) => {

        this.employee = vals.payload.data() as Employee
        this.profileForm.patchValue({
          emailAddress: this.employee?.personalDetails?.email,
          firstName: this.employee?.personalDetails?.firstName,
          lastName: this.employee?.personalDetails?.lastName,
          employeeNumber:this.employee?.personalDetails?.employeeNumber,
          department:this.employee?.personalDetails?.department,
          role:this.employee?.personalDetails?.role
        })
        this.changeDetectionRef.detectChanges();
      }
    );
  }

   //update profile
   public saveProfile(){
    this.queryservice.updateEmployee({
      uid:this.employee.uid,
      personalDetails:{
        email:this.emailAddress.value,
        firstName:this.firstName.value,
        lastName:this.lastName.value,
        employeeNumber:this.employeeNumber.value,
        department:this.department.value,
        role:this.role.value
    }})
 
    }
      // Choose role
  public switchRole(event: any) {
    this.role.setValue(event.target.value, {
      onlySelf: true
    })
  }

}
