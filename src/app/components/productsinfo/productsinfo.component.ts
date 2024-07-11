import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productsinfo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productsinfo.component.html',
  styleUrl: './productsinfo.component.css'
})
export class ProductsinfoComponent {
  product: any;
  constructor(private productlist: ApiService,private routes: ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.routes.snapshot.params['id'];

    this.productlist.productinfo().subscribe(products => {
      if (Array.isArray(products)) {
        this.product = products.find((p:any) => p.id === id)
      } else {
        console.log('No product found with id:', id)
      }
    })

}
}
