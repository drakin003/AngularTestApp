import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import 'animate.css';

@Component({
    selector: 'app-api-fetching',
    imports: [CommonModule],
    templateUrl: './api-fetching.component.html',
    styleUrl: './api-fetching.component.css'
})
export class ApiFetchingComponent {
  info: any;
  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getusers().subscribe( (data) => {
      this.info = data;
    })
  }

}
