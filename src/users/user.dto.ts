import { IsInt, IsNotEmpty } from "class-validator"

export class UserDto {
    @IsNotEmpty()
    name: string
    
    @IsInt()
    age: number
}