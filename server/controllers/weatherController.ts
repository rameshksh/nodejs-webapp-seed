import { Express, Request, Response } from "express";
import { IWeatherService } from '../services/weatherService';
import { Result } from '../models/result';

export interface IWeatherController {
    get(req: Request, res: Response);
}

export class WeatherController implements IWeatherController{
    public result: Result;
    public service : IWeatherService;

    public constructor(service: IWeatherService) {
        this.result = new Result();
        this.service = service;
    }

    public get(req: Request, res: Response) {

        let cords = req.params.cords;

        console.log('Inside get weather controller...', cords);

        if (cords) {
            let lang = cords.split(',')[0];
            let long = cords.split(',')[1];

            this.service.get({ long: long, lang: lang }, (err, item) => {

                if (err){
                    console.log(err);
                    return res.json(err);
                } 

                return res.json(item);
            });
        }else{
            return res.json("Coordinates Missing");
        }       
    }
}  