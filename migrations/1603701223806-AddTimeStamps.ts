import {MigrationInterface, QueryRunner} from "typeorm";

export class AddTimeStamps1603701223806 implements MigrationInterface {
    name = 'AddTimeStamps1603701223806'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `deletedAt`");
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` ADD `deletedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `deletedAt`");
        await queryRunner.query("ALTER TABLE `users` DROP COLUMN `createdAt`");
        await queryRunner.query("ALTER TABLE `users` ADD `deletedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `users` ADD `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
    }

}
