import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { User } from "./user.entity";
import { UserService } from "./user.service";

@Resolver(_of => User)
export class UserResolver {
    constructor(private userService: UserService) {}

    @Query(returns => [User])
    async users() {
        return await this.userService.getUsers();
    }

    @Mutation(returns => User, {name: 'createUser'})
    async create(
        @Args({name: 'name'}) name:string,
        @Args({name: 'age', type: () => Int}) age:number
    ) {
        return await User.create({name, age}).save()
    }
}