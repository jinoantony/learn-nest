import { Body, Controller, Get, Post } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    get() {
        return this.userService.getUsers()
    }

    @Post()
    async create(@Body() userDto: UserDto) {
        await this.userService.createUser(userDto)
        return {success: true}
    }
}