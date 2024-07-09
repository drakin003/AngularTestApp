import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent{
  showweather: any = '';

  constructor(private http: ApiService){}

  ngOnInit(): void{
    this.weather("Karachi");
  }


  weather(cityname: string){

    this.http.weatherinfo(cityname).subscribe({
      next: data => {
        this.showweather = data;
      },
      error: (error) => {
        console.error(error)
      }
     })
  
  };

}
