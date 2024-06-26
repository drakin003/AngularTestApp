import { Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { PrComponent } from './components/pr/pr.component';

export const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'calculator', component: CalculatorComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'pr', component: PrComponent }
];
