import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductsdetailsComponent } from './components/productsdetails/productsdetails.component';
import { WeatherComponent } from './components/weather/weather.component';
import { ApiFetchingComponent } from './components/api-fetching/api-fetching.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserinfoComponent } from './components/userinfo/userinfo.component';
import { ExtraComponent } from './components/extra/extra.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'products/:id', component: ProductsdetailsComponent },
    { path: "weather", component: WeatherComponent },
    { path: 'api', component: ApiFetchingComponent },
    { path: 'register', component: SignupComponent },
    { path: 'userinfo', component: UserinfoComponent },
    { path: 'extra', component: ExtraComponent }
];
