import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  product: any = [];

  constructor(private productlist: ApiService) { }

  ngOnInit(): void {
      this.productlist.productinfo().subscribe(products => {
          this.product = products
      });
  }

}
