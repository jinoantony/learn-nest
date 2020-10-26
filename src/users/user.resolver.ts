import { Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Resolver(_of => User)
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(returns => [User])
    async users() {
        return await this.userService.getUsers();
    }
}