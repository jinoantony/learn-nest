import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1603653117490 implements MigrationInterface {
    name = 'CreateUsersTable1603653117490'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `age` int NOT NULL, `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `users`");
    }

}
