import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'
import { User } from '../user.model'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email:any;
  password:any;

  // constructor(private authserve:AuthService,private router:Router) { }

  // signup(): void{
  //   this.authserve.signup(this.email, this.password).subscribe(()=>{
  //     console.log('signup success');
  //     this.router.navigate(['/login']);
  //   },
  //   error=>{
  //     console.error(error);
  //   })
  // }

user:User =new User('','');

constructor(private authserve:AuthService,private router:Router){}
signup(): void {
  this.authserve.signup(this.user).subscribe(
    response => {
      console.log('Signup successful:', response);
      this.router.navigate(['/dashboard']);
      // Handle success (e.g., display a success message)
    },
    error => {
      console.error('Signup failed:', error);
      // Handle error (e.g., display an error message)
    })

}
}