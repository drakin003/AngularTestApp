import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: any = [];

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.api.getproducts().subscribe( (data) => {
      this.product = data;
    })
  }

}
