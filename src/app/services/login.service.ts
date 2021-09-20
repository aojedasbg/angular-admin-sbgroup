import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError} from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
    providedIn: 'root'
})

export class LoginService {
    token: string;
    adminName: string;
    adminId: string;
    adminEmail: string;

    httpOptions = {
        headers: new HttpHeaders({'Content-Type':'application/json'})
    };

    constructor(private http: HttpClient){
        this.loadStorage();
    }

    private saveStorage(data){
        this.token = data.token;
        this.adminName = data.adminName;
        this.adminId = data.adminId;
        this.adminEmail = data.adminEmail;
    
        localStorage.setItem('token', this.token);
        localStorage.setItem('adminName', this.adminName);
        localStorage.setItem('adminId', this.adminId);
        localStorage.setItem('adminEmail', this.adminEmail);
    }

    public loadStorage(){
        try {
            if(localStorage.getItem('token')) {
              this.token = localStorage.getItem('token');
            } else {
              this.token = '';
            }
        } catch (err) {
            localStorage.removeItem('token');
            this.token = '';
            console.log(err);
        }
    }

    login(data){
        interface Response {
            api_key: string;
            status: number;
            results: any;
        }

        return this.http.post<Response>(environment.sysConfig.apiUrl + 'auth/login', data, this.httpOptions).pipe(
            map(response => {
              if (response.status === 0){
                return response;
              } else {
                const storageData = {
                  token: response.api_key,
                  adminName: response.results[0].name,
                  adminEmail: response.results[0].email,
                  adminId: response.results[0].id,
                };
                this.saveStorage(storageData);
                return response;
             }
            }), catchError( err => {
              const errorArray = [];
              errorArray.push(err);
              return errorArray;
            })
          );
    }

    logout(){
      console.log('logout')
        this.token = null;
        localStorage.removeItem('token');
        localStorage.removeItem('adminName');
        localStorage.removeItem('adminId');
        localStorage.removeItem('adminEmail');
    }

    checkToken(){

        interface Response {
            error: any;
          }
          this.httpOptions = {
            headers: new HttpHeaders({ 'api-key': this.token })
          }
      
          return this.http.post<Response>(environment.sysConfig.apiUrl + 'auth/validateToken',{}, this.httpOptions).pipe(
            map(response => {
              return response.error;
            }),
            catchError(err => {
              return throwError(err);
            })
          );
      
    }

}