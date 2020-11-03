import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PDFModule } from "nestjs-pdf";
import { UserController } from "./user.controller";
import { User } from "./user.entity";
import { UserResolver } from "./user.resolver";
import { UserService } from "./user.service";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        PDFModule.register({
            view: {
                root: 'views',
                engine: "handlebars",
            }
        })
    ],
    controllers: [UserController],
    providers: [UserService, UserResolver],
})
export class UserModule {}