import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class UsersService {


    httpOptions = {
        headers: new HttpHeaders({ 'api-key': localStorage.getItem('token') })
    };

    constructor(private http: HttpClient){}

    segments(){
        return this.http.get(environment.sysConfig.apiUrl + 'users/segments', this.httpOptions).pipe(
            map(response => {
              return response;
            }), catchError( err => {
              const errorArray = [];
              errorArray.push(err);
              return errorArray;
            })
        );
    }

    createUser(data){
        interface Response {
            error: any;
            status: any;
          }
      
        return this.http.post<Response>(environment.sysConfig.apiUrl + 'users/create-user', data, this.httpOptions).pipe(
        map(response => {
            return response;
        }),
        catchError(err => {
            return throwError(err);
        })
        );
    }

    users(){
        return this.http.get(environment.sysConfig.apiUrl + 'users/', this.httpOptions).pipe(
            map(response => {
              return response;
            }), catchError( err => {
              const errorArray = [];
              errorArray.push(err);
              return errorArray;
            })
        );
    }

    userDetail(userId){
        return this.http.get(environment.sysConfig.apiUrl + 'users/user-detail',{params:{user_id: userId}, headers: this.httpOptions.headers}).pipe(
            map(response => {
              return response;
            }), catchError( err => {
              const errorArray = [];
              errorArray.push(err);
              return errorArray;
            })
          );
    }

    deleteUser(data){
      this.httpOptions = {
        headers: new HttpHeaders({ 'api-key': localStorage.getItem('token'), 'Content-Type': 'application/json' })
      };
      return this.http.patch(environment.sysConfig.apiUrl + 'users/delete-user', data, this.httpOptions).pipe(
        map(response => {
          return response;
        }), catchError( err => {
          const errorArray = [];
          errorArray.push(err);
          return errorArray;
        })
      );
    }

    updateUser(data){
      this.httpOptions = {
        headers: new HttpHeaders({ 'api-key': localStorage.getItem('token'), 'Content-Type': 'application/json' })
      };
      return this.http.patch(environment.sysConfig.apiUrl + 'users/update-user', data, this.httpOptions).pipe(
        map(response => {
          return response;
        }), catchError( err => {
          const errorArray = [];
          errorArray.push(err);
          return errorArray;
        })
      );
    }
}