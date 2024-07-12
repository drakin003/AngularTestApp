import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: '**', redirectTo: ''},
    {path: 'contact', component: ContactComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'products/:id', component: ProductsdetailsComponent}
];
