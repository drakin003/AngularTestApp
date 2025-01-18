import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Userinfo } from '../../classes/userinfo';
import { ApiService } from '../../services/api.service';
import {FormsModule} from '@angular/forms'

@Component({
    selector: 'app-signup',
    imports: [CommonModule, FormsModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css'
})
export class SignupComponent {
  user: Userinfo = new Userinfo('', '', '');
  registermessage: string = '';

  constructor(private api: ApiService){}

  onSubmit(form: any){
    if(form.valid){
      const observer = {
        next: (res: any) => {
          if(res && res.message === 'User Registered!'){
            this.registermessage = 'User Registered Sccessfully!';
            this.user = new Userinfo('', '', '');
          } else {
            this.registermessage = 'User Registration Failed!';
          }
        },
        error: (err: any) => {
          console.log(err);
          this.registermessage = 'User Registration Failed!, Check Console';
        }
      };
      this.api.getregister(this.user).subscribe(observer);
      }
    }
}
