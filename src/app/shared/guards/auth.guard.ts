import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { jwtToken } from '../models/jwt_token.model';
import { SchtroumpfService } from '../services/schtroumpf.service';
import { map } from 'rxjs/operators'; 


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private schtroumpfService:SchtroumpfService){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {
    return this.schtroumpfService.jwtToken.pipe(
      map( ( jwtToken:jwtToken)=> {
        return jwtToken.isAuthenticated;
      })
    )
  }
  
}
