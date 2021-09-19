import { Component, OnInit } from '@angular/core';
import { QueryService } from '../shared/services/query.service';
import { DataService } from '../shared/services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Employee } from '../shared/models/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  public message = new FormControl("");
  public name = new FormControl("");
  public messageForm = new FormGroup({
    message: this.message,
    name:this.name
  })

  public text: string;
public employee:Employee;

  constructor(
    private readonly queryservice: QueryService,
    public dataservice: DataService,

  ) {
 
  }

  //
  displayStyle = "none";

  openPopup(employee:Employee,title: any) {
    this.displayStyle = "block";
    this.text = title
    this.employee= employee
    console.log(this.text)
  }
  closePopup() {
    this.displayStyle = "none";
  }
  // 
  public sendMessage() {
    this.queryservice.messageEmployee(this.employee,{
      from:this.name.value,
      msg:this.message.value
    })
    this.messageForm.reset();
    //send message
    this.closePopup()
  }
  public ngOnInit(): void {
    this.queryservice.getEmployeeList();
    
  }

}
