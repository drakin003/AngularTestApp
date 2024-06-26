import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ch.component.html',
  styleUrl: './ch.component.css',
  inputs: ['data']
})
export class ChComponent {
  data: any;

}
