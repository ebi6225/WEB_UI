
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import {  catchError } from 'rxjs/operators';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  apiURL = 'http://localhost:51928/CallAction';

  constructor(private http: HttpClient) { }

  myClickFunction(event) {
    this.name = '';
    this.requestTest();
 }

   requestTest(){

    this.http.post<any>(this.apiURL + '/GetMachineName', null)
      .subscribe(data => {
        this.name = data;
      });
    }


    // Error handling
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
