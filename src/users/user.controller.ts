import { Body, Controller, Get, Post, Render } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @Render('index')
    get() {
        return {
            name: 'Jino'
        }
        return this.userService.getUsers()
    }

    @Post()
    async create(@Body() userDto: UserDto) {
        await this.userService.createUser(userDto)
        return {success: true}
    }

    @Get('pdf')
    async getPdf() {
        return await this.userService.generatePdf()
    }
}