import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productsdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productsdetails.component.html',
  styleUrl: './productsdetails.component.css'
})
export class ProductsdetailsComponent {

  product: any;

  constructor(private api: ApiService,private routes: ActivatedRoute){}

  ngOnInit(): void {
    let id = +this.routes.snapshot.params['id'];

    this.api.getproducts().subscribe( (products) => {
      if (Array.isArray(products)){
        this.product = products.find( (p) => p.id === id)
      } else {
        console.log('Error getting data');
      }
    })
  }

}
