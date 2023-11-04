import {NextFunction, Router, Response, Request} from "express";

export interface IControllerRote {
    path: string;
    function: (req: Request, res: Response, next: NextFunction) => void;
    method: keyof Pick<Router, 'get' | 'post' | 'delete' | 'patch' | 'put'>;
}
