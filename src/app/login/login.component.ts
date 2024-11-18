import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  isLoginView: boolean = true;

  userRegisterobj: any = {
    userName: '',
    password: '',
    emailId: ''
  };

  // Inject Router in the constructor
  constructor(private router: Router) {}

  onRegister() {
    debugger;
    const isLocalData = localStorage.getItem("angular18Local");
    if (isLocalData != null) {
      const localArray = JSON.parse(isLocalData);
      localArray.push(this.userRegisterobj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    } else {
      const localArray = [];
      localArray.push(this.userRegisterobj);
      localStorage.setItem("angular18Local", JSON.stringify(localArray));
    }

    // Redirect to the dashboard
     this.router.navigate(['/dashboard']);
  }
}
