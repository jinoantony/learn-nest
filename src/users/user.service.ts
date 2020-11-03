import { Injectable } from "@nestjs/common";
import { InjectPdf, PDF } from "nestjs-pdf";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(@InjectPdf() private pdf: PDF) {}

    async getUsers() {
        return await User.find()
    }

    async createUser(userDto: UserDto) {
        return await User.create(userDto).save()
    }

    async generatePdf() {
        return await this.pdf({
            template: 'templates/simple',
            filename: 'invoice.pdf',
            // height: '29.7cm',
            // width: '21cm',
            // format: 'Letter',
            // orientation: 'landscape',
            locals: {
                name: 'Jino Antony'
            }
        })
    }
}