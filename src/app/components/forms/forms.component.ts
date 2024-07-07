import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Userinfo } from '../../classes/userinfo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {

  user: Userinfo = new Userinfo("", "", "");
  registermessage: string = "";

  constructor(private apiService: ApiService) {}

  onSubmit(form: any) {
    if (form.valid) {
      const observer = {
        next: (res: any) => {
          if (res && res.message === "User Registered!") {
            this.registermessage = 'User Registered Successfully';
            this.user = new Userinfo("", "", "");
          } else {
            this.registermessage = 'User Registration Failed';
          }
        },
        error: (error: any) => {
          console.error('Error registering user:', error);
          this.registermessage = "Failed to register user. Please try again.";
        },
      };

      this.apiService.registerUser(this.user).subscribe(observer);
    } else {
      this.registermessage = "Please fill all the required fields.";
    }
  }
}
