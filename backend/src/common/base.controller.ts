import {Router, Response} from "express";
import {IControllerRote} from "./route.interface";

export abstract class Controller {

    private readonly _router: Router;

    constructor() {
        this._router = Router();
    }

    get router() {
        return this._router;
    }

    public send<T>(res: Response, code: number, message: T) {
        res.type('application/json');
        return res.status(code).json(message);
    }

    public ok<T>(res: Response, message: T) {
        return this.send<T>(res, 200, message);
    }

    public created(res: Response) {
        return res.sendStatus(201);
    }

    protected bindRoutes(routes: IControllerRote[]) {
        for (const route of routes) {
            const handler = route.function.bind(this);
            this.router[route.method](route.path, handler);
        }
    }
}
