import { Component, OnInit } from '@angular/core';
import {WeatherService} from '../weather.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  constructor( private WeatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }
getLocation(){
if("geolocation" in navigator){
  navigator.geolocation.watchPosition((success)=>{
    this.lat = success.coords.latitude;
    this.lon = success.coords.longitude;

    this.WeatherService.getWeatherByCoords(this.lat,this.lon).subscribe(data=>{
      this.weather = data;
    })
  })
}
}
getCity(city: string){
  this.WeatherService.getWeatherByCityName(city).subscribe(data => {
    this.weather =data
  })
}
}
