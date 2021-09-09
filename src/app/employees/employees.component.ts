import { Component, OnInit } from '@angular/core';
import { QueryService } from '../shared/services/query.service';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(
    private readonly queryservice: QueryService,
    public dataservice: DataService

  ) { }

  public ngOnInit(): void {
    // console.log("here")
    this.queryservice.getEmployeeList();
    this.dataservice.employees$.value
    // console.log(  this.dataservice.employees$.value);
  }

}
