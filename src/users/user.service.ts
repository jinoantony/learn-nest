import { Injectable } from "@nestjs/common";
import { UserDto } from "./user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    async getUsers() {
        return await User.find()
    }

    async createUser(userDto: UserDto) {
        return await User.create(userDto).save()
    }
}