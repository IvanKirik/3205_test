import express, {Express} from 'express';
import {Server} from 'http';
import {SearchController} from "./search/search.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {FileService} from "./files/file.service";
import cors from "cors";


export class App {

    app: Express;
    server!: Server;
    port: number;
    searchController: SearchController;
    exeptionFilter: ExeptionFilter;
    fileService: FileService;

    constructor(searchController: SearchController,
                exeptionFilter: ExeptionFilter,
                fileService: FileService
    ) {

        this.app = express();
        this.port = 5000;

        this.exeptionFilter = exeptionFilter;
        this.searchController = searchController;

        this.fileService = fileService;

        this.fileService.readFile()


    }

    useRotes() {
        this.app.use('/', this.searchController.router);
    }

    useExeptionFilters() {
        this.app.use(this.exeptionFilter.catch.bind(this.exeptionFilter));
    }

    useCors() {
        this.app.use(cors())
    }

    public async init() {
        this.useCors();
        this.useRotes();
        this.useExeptionFilters();
        this.server = this.app.listen(this.port);
        console.log(`The server started on http://localhost:${this.port}`)
    }
}


