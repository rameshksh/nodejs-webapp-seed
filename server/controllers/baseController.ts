import { Express, Request, Response } from "express";
import { IBaseService } from '../services/baseService';
import { Result } from '../models/result';

export interface IBaseController<TEntity> {
    get(req: Request, res: Response);
}

export class BaseController<TEntity> implements IBaseController<TEntity> {
    public result: Result;

    public constructor(public baseService: IBaseService<TEntity>) {
        this.result = new Result();
    }

    public get(req: Request, res: Response) {

        var id = req.query.id;     
    }
}  