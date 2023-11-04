import {NextFunction, Request, Response} from "express";
import {IExeptionFilter} from "./exeptionFilter.interface";
import {HttpError} from "./httpError.class";

export class ExeptionFilter implements IExeptionFilter {

    constructor() {
    }

    catch (err: HttpError | Error, req: Request, res: Response, next: NextFunction) {
        if (err instanceof HttpError) {
            console.error(`[${err.context}] Ошибка ${err.statusCode} ${err.message}`);
            res.status(err.statusCode).send({err: err.message});
        } else {
            console.error(`${err.message}`);
            res.status(500).send({err: err.message});
        }
    }
}
