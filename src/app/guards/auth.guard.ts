import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate{

    constructor(private router: Router, private loginService: LoginService) {}
  
    async canActivate(){
        if(localStorage.getItem('token') === null){
            this.router.navigate(['/auth/login']);
            return false;
        }else{
            return this.checkAuth().then(() => {
                return true;
              }).catch((err) => {
                this.router.navigate(['/auth/login']);
                return false;
            });
        }
    }
  
    checkAuth(){
      return new Promise((resolve, reject) => {
        
        this.loginService.checkToken().subscribe(
          (res: any) => {
            if(!res){
              return resolve(res);
            }
            reject(res);
          },
          (err: any) => {
            reject(false)
          }
        );
      });
    }
  
  
  }