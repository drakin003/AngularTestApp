import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  message: string = "Hello from service";

  showmessage(){
    return this.message;

  }
}
