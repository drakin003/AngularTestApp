import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router){

  }

  onSubmit(form: any) {
    if (this.email && this.password) {
      const email = this.email;
      const password = this.password;
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      localStorage.setItem('email', email);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 1000);
    }
  }
}
