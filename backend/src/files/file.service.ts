import {join} from "path";
import {promises} from 'fs';

export class FileService {

    filePath: string;

    constructor() {
        this.filePath = join(__dirname, '..', '..', 'db.json');
    }

    async readFile() {
        const data = await promises.readFile(this.filePath, "utf-8");
        return JSON.parse(data);
    }
}
