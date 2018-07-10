import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  employees = [];
    constructor(private _employeeService: EmployeeService ){}
    ngOnInit(){
        this._employeeService.getEmployees().subscribe(resEmpData => this.employees = resEmpData);
        console.log(employees);
    }
}
