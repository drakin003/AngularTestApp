import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-weather',
    imports: [CommonModule],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.css'
})
export class WeatherComponent {
  showweather: any;
  cityname: string = 'Karachi'
  constructor(private api: ApiService) { }

  weather(n: string) {
    this.cityname = n
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.api.getweatherinfo(this.cityname).subscribe((data) => {
      this.showweather = data;
    })

  }

}
