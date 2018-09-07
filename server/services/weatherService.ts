
import { Weather } from '../models/weather';
const https = require('https');
var request = require('request');

export interface IWeatherService {
    get(query: Object, callback: (errr: Error, item: Weather) => any);
}

export class WeatherService implements IWeatherService {
    private apiUrl: string = "https://api.darksky.net/forecast/17b2f5590595e8181889f0728db3fdc3/";

    public constructor() { }

    public get(cords: string, callback: (errr: Error, item: Weather) => any) {
        console.log('Inside service....');

        request.get(this.apiUrl + cords, (error, response, body) => {
            // A chunk of data has been recieved.
            let obj = JSON.parse(body);

            console.log(obj);

            let weather = new Weather();
            weather.currently = obj["currently"];
            weather.timezone = obj["timezone"];
            weather.daily = obj["daily"];

            callback(error, weather);

        }).on("error", (err) => {
            callback(err, null);
        });
    }
}


