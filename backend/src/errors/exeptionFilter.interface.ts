import {NextFunction, Request, Response} from "express";

export interface IExeptionFilter {
    catch: (err: any, req: Request, res: Response, next: NextFunction) => void;
}
