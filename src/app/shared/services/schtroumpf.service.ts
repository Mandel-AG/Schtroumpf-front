import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { schtroumpf } from '../models/schtroumpf.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtToken } from '../models/jwt_token.model';
import { switchMap, tap } from "rxjs/operators";

@Injectable()
export class SchtroumpfService {



  public currentSchtroumpf : BehaviorSubject<schtroumpf> = new BehaviorSubject(null);


  public jwtToken : BehaviorSubject<jwtToken> = new BehaviorSubject({
    isAuthenticated:null,
    token:null
  })

  constructor( private http: HttpClient) {
    this.initToken();
   }

   private initToken():void{
     const token = localStorage.getItem('jwt');
    if(token){ this.jwtToken.next({
      isAuthenticated: true,
      token:token
    })}else{
      this.jwtToken.next({
        isAuthenticated: false,
        token:null
      })

    } 
   }


  public login(credentials:{email:string, password:string}):Observable<string>{
    return this.http.post<string>('http://localhost:5200/back/login', credentials).pipe(
      tap((token:string)=> {
        console.log(token)
        this.jwtToken.next({
          isAuthenticated:true,
          token : token
        })
        localStorage.setItem('jwt', token.trim())
      })
    )
  }



  public addFriend(friend, id):Observable<string>{
    console.log('ad f if',id)
    console.log('ad f friend',friend)
    return this.http.post<string>(`http://localhost:5200/back/user/addFriend/${id}`, {friend})
  }



  public register(user:schtroumpf):Observable<string>{
    return this.http.post<string>('/back/register', user).pipe(
      tap((token:string)=> {
        this.jwtToken.next({
          isAuthenticated:true,
          token : token
        })
        localStorage.setItem('jwt', token.trim())      
      })
   )
  }


  
  public logOut(){
    this.jwtToken.next({
      isAuthenticated:false,
      token:null
    });
    localStorage.removeItem('jwt')
  }


  public getSchtroumpf(){
    return this.http.get< {
      id: string,
      email:string, 
      age : number, 
      famille : string, 
      race : string, 
      nourriture : string,
      ami : []}[]>('http://localhost:5200/back/user')
  }



  public getCurrentSchtroumpf(): Observable<schtroumpf>{
    if(this.currentSchtroumpf.value){
      return this.currentSchtroumpf;
    }else{
      return this.http.get<schtroumpf>('http://localhost:5200/back/user/currentUser').pipe(
        tap( (user:schtroumpf)=>{
          this.currentSchtroumpf.next(user)
        }),
        switchMap( ()=>{
          return this.currentSchtroumpf;
        })
      )
    }
  }



  // public getCurrentSchtroumpf(): Observable<schtroumpf>{
  //   if(this.currentSchtroumpf.value){
  //     return this.currentSchtroumpf;
  //   }else{
  //     return this.http.get<schtroumpf>('/back/user/currentUser').pipe(
  //       tap( (user:schtroumpf)=>{
  //         this.currentSchtroumpf.next(user)
  //       }),
  //       switchMap( ()=>{
  //         return this.currentSchtroumpf;
  //       })
  //     )
  //   }
  // }





}

