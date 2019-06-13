import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployee } from './IEmployee';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import { throwError as ObservableThtrowError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeHTTPService {

  // mocking a url that point to the file with emplyees
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) { }

  /**
   * This method fetches a list ob employees from the predefined URL and
   * return an Observable of type EmployeeArray
   */
  getEmployees(): Observable<IEmployee[]> {
    // do a http request to the mocked url
    // casting the observable/result to a Emolyee array
    return this.http.get<IEmployee[]>(this._url).pipe(
                    catchError(this.errorHandler));
  }

  /**
   * handling the errors per observable
   *
   * @param error the error from the http get
   */
  errorHandler(error: HttpErrorResponse){
    // if error has no message return a default message instead
    return ObservableThtrowError(error.message || "Server Error");
  }
}
