import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class SchtroumpfService {

  constructor( private http: HttpClient) { }


  public login(credentials){
    return this.http.post('http://localhost:5200/login', {credentials})
  }

  public getSchtroumpf(){
    return this.http.get< {
      email:string, 
      age : number, 
      famille : string, 
      race : string, 
      nourriture : string,
      ami : []}[]>('http://localhost:5200/user')

  }

  public getCurrentSchtroumpf(){
    return this.http.get<{user}>('http://localhost:5200/user/currentUser')
  }
}
