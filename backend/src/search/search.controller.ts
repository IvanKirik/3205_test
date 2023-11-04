import {Controller} from "../common/base.controller";
import {NextFunction, Response, Request} from "express";
import {SearchService} from "./search.service";

export class SearchController extends Controller {
    searchService: SearchService;
    constructor(searchService: SearchService) {
        super();
        this.bindRoutes([
            { path: '/search', method: 'get', function: this.search}
        ])
        this.searchService = searchService;
    }

    async search (req: Request, res: Response, next: NextFunction) {

        const {email, number} = req.query;
        if (email) {
            setTimeout(async () => {
                const data = await this.searchService.getUser(email as string, number as string);
                this.send(res, 200, data)
            }, 5000)
        }
    }
}
