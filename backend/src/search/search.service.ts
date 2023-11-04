import {FileService} from "../files/file.service";
import {IUser} from "../models/user.interface";

export class SearchService {
    fileService: FileService;

    constructor(fileService: FileService) {
        this.fileService = fileService;
    }

    async getUser(email: string, number?: string) {
       const data: IUser[] = await this.fileService.readFile();
       if (number) {
           return data.filter(item => {
               if (item.email === email && item.number === number) {
                   return item;
               }
           })
       } else {
           return data.filter(item => {
               if (item.email === email) {
                   return item;
               }
           })
       }
    }
}
