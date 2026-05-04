import { MigrationInterface, QueryRunner } from "typeorm";

export class Migracion1777920376855 implements MigrationInterface {
    name = 'Migracion1777920376855'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "instructor" ("id_instructor" SERIAL NOT NULL, "titulo" character varying NOT NULL, "userIdUser" integer, CONSTRAINT "REL_fea2208c1e29ae902431c1e546" UNIQUE ("userIdUser"), CONSTRAINT "PK_24e53663453cf6fc12981d4d2f9" PRIMARY KEY ("id_instructor"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id_user" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "identificacion" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updateAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_9664961c0264d34a3cf82b11700" PRIMARY KEY ("id_user"))`);
        await queryRunner.query(`ALTER TABLE "instructor" ADD CONSTRAINT "FK_fea2208c1e29ae902431c1e5466" FOREIGN KEY ("userIdUser") REFERENCES "user"("id_user") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "instructor" DROP CONSTRAINT "FK_fea2208c1e29ae902431c1e5466"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "instructor"`);
    }

}
