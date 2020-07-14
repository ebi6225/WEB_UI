
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

  apiURL = 'http://localhost:51928/CallAction';

  constructor(private http: HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  body = { title: 'Angular POST Request Example' };

  myClickFunction(event) {


    alert('Button is clicked');
    this.getTest();
 }


   getTest(){
     console.log('getTest');
     this.http.post<any>(this.apiURL + '/TSPRoute', this.body, this.httpOptions)
     .subscribe(data => {
       console.log(data);
 });
    }

    // Error handling
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
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
