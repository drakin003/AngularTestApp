import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private getlink = 'http://localhost:4300/api/users';
  private postlink = 'http://localhost:4300/api/register';

  constructor(private http: HttpClient) { 
  }

  registerUser(user: any): Observable<any>{
    return this.http.post<any>(this.postlink, user);

  }

  getdata(){
    return this.http.get(this.getlink);
  }

  productinfo(){
    return [{
      id: 1,
      name: 'HP Core i5 Laptop',
      price: 35000,
      cpu: 'Intel Core i5 4400',
      ram: '8 GB DDR3',
      storage: 'ADATA 256 GB SSD',
      url: 'hp.jpg'
    },
    {
      id: 2,
      name: 'Dell Core i7 Laptop',
      price: 45000,
      cpu: 'Intel Core i7 7700',
      ram: '8 GB DDR3',
      storage: 'ADATA 512 GB SSD',
      url: 'hp.jpg'
    },
    {
      id: 3,
      name: 'Asus Core i5 Laptop',
      price: 65000,
      cpu: 'Intel Core i5 8600',
      ram: '8 GB DDR3',
      storage: 'WD 1TB HDD',
      url: 'hp.jpg'
    },
    {
      id: 4,
      name: 'HP Core i3 Laptop',
      price: 15000,
      cpu: 'Intel Core i3 2600',
      ram: '8 GB DDR3',
      storage: 'ADATA 256 GB SSD',
      url: 'hp.jpg'
    },
    {
      id: 5,
      name: 'Dell Inspiron Gaming',
      price: 59999,
      cpu: 'AMD Ryzen 5 3600',
      ram: '16 GB DDR4',
      storage: '1 TB HDD + 512 GB SSD',
      url: 'hp.jpg'
    },
    {
      id: 6,
      name: 'Apple MacBook Air M1',
      price: 84999,
      cpu: 'Apple M1 Chip',
      ram: '8 GB',
      storage: '512 GB SSD',
      url: "macbook.jpg"
    }
  ]
  }
}
