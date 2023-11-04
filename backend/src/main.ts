import {App} from "./app";
import {SearchController} from "./search/search.controller";
import {ExeptionFilter} from "./errors/exeption.filter";
import {FileService} from "./files/file.service";
import {SearchService} from "./search/search.service";

async function bootstrap() {
    const app = new App(new SearchController(new SearchService(new FileService())), new ExeptionFilter(), new FileService());
    await app.init();
}

bootstrap();
