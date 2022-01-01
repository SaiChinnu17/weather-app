import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  Url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey = 'fd584353cc259a51f5feaeea9820fe56';

  constructor( private http: HttpClient) { }

getWeatherByCoords(lat: string | number | boolean,lon: string | number | boolean){
  let params =new HttpParams()
   .set('lat',lat)
   .set('lon',lon)
  .set('units','imperial')
   .set('appid', this.apiKey)


   return this.http.get(this.Url ,{params});
  }
getWeatherByCityName(city:string){
  let params = new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid', this.apiKey)

  return this.http.get(this.Url,{params});
  

}

}