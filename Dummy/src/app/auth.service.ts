import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from './user.model'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl ='http://localhost:3000';

  constructor(private http:HttpClient) { }
  // // signup(email:string,password:string): Observable<any>{
  // //   const payload={email,password};
  // //   return this.http.post(`${this.apiUrl}/signup`,payload);

  // // }
  // // login(email:string,password:string): Observable<any>{
  // //   const payload={email,password};
  // //   return this.http.post(`${this.apiUrl}/login`,payload);

  // // }
  // signup(email:string,password:string){
    
  //   this.http.post('http://localhost:3000/signup')
  // }
signup(user:User):Observable<any>{
  return this.http.post(`${this.apiUrl}/signup`,user);
}

login(email:string,password:string):Observable<any>{
  return this.http.post(`${this.apiUrl}/login`,{email,password});
}
  }


