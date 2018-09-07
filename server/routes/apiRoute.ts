import { Express, Router, Request, Response } from 'express';
import { IWeatherService, WeatherService } from '../services/weatherService';
import { WeatherController, IWeatherController } from '../controllers/weatherController';

export interface IApiRoute {
    get();
}

var self;
export class ApiRoute implements IApiRoute {
    controller: IWeatherController;
    service: IWeatherService;

    constructor(public app: Express) {

        this.app = app;

        let service = new WeatherService();
        this.controller = new WeatherController(service);

        self = this;

        this.get();
    }

    get() {
        this.app.get('/api/weather/:cords', (req: Request, res: Response) => {

            self.controller.get(req, res);
        });
    }
}