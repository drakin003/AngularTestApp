import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChComponent } from '../ch/ch.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pr',
  standalone: true,
  imports: [CommonModule, ChComponent],
  templateUrl: './pr.component.html',
  styleUrl: './pr.component.css'
})
export class PrComponent {
  info: any

  constructor(private http: HttpClient) {
    this.getData();
  }

  getData() {
    this.http.get('http://51.112.70.161:4300/api/users').subscribe(data => {
      this.info = data;
    });
  }
  }
