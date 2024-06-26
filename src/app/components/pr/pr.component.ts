import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ChComponent } from '../ch/ch.component';

@Component({
  selector: 'app-pr',
  standalone: true,
  imports: [CommonModule, ChComponent],
  templateUrl: './pr.component.html',
  styleUrl: './pr.component.css'
})
export class PrComponent {

}
