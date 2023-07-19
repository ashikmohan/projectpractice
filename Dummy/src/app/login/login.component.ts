
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

email:string='';
password:string='';


constructor(private router:Router,private authserve:AuthService){ }


login():void{
this.authserve.login(this.email,this.password).subscribe(response =>{
  console.log('login successful',response);
  this.router.navigate(['/dashboard']);
},
error=>{
  console.error('Login failed',error)
})



}
}
