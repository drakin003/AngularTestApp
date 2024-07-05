import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PrComponent } from './components/pr/pr.component';
import { FormsComponent } from './components/forms/forms.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalculatorComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'api', component: PrComponent },
  { path: 'login', component: FormsComponent },
  { path: '**', component: PagenotfoundComponent }
];