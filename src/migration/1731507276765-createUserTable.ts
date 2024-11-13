import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUserTable1731507276765 implements MigrationInterface {
    name = 'CreateUserTable1731507276765'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rejest\` ADD \`email\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`rejest\` DROP COLUMN \`email\``);
    }

}
