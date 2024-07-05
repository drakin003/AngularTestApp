import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ChComponent } from '../ch/ch.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-pr',
  standalone: true,
  imports: [CommonModule, ChComponent],
  templateUrl: './pr.component.html',
  styleUrl: './pr.component.css'
})
export class PrComponent implements OnInit {
  comments: any = '';

  constructor(private apiService: ApiService) {}
  ngOnInit(): void {
    this.apiService.getdata().subscribe(data => this.comments = data)
      
  }

  }
