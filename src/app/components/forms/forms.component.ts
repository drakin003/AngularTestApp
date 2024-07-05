import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Userinfo } from '../../classes/userinfo';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  user: Userinfo = new Userinfo("","", []);

  courseslist: string[] = ["Angular", "React", "Vue"];

  constructor(private router: Router){
  }

  onSubmit(form: any) {
    if (form.valid) {
      const email = this.user.userEmail;
      const password = this.user.userPassword;
      console.log(`Email: ${email}`);
      console.log(`Password: ${password}`);
      localStorage.setItem('email', email);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        this.router.navigate(['']);
      }, 1000);
    } else { console.log("Something Went Wrong");
    }}
  }
