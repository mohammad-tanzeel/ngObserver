import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { map } from "rxjs/operators";
import { Observable } from 'rxjs/Observable';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url: string = "apidata/employeedata.json";
  constructor(private _http: Http) { }
  getEmployees(){
    return this._http.get(this._url).map((response:Response) => response.json());
    }
}
