import { Express, Router, Request, Response } from 'express';
import { IBaseService, BaseService } from '../services/baseService';
import { BaseController, IBaseController } from '../controllers/baseController';

export interface IApiRoute<TEntity> {
    get();
}

var self;
export class ApiRoute<TEntity> implements IApiRoute<TEntity>
{
    baseController: IBaseController<TEntity>;
    baseService: IBaseService<TEntity>;

    constructor(public app: Express, public apiName: string) {
        this.app = app;
        self = this;

        this.get();
    }

    get() {
        this.app.get('/api/weather', (req: Request, res: Response) => {

            self.baseController.getEntities(req, res);
        });
    }
}