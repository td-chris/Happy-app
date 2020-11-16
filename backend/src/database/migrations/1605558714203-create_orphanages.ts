import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createOrphanages1605558714203 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
      //REALIZAR ALTERACOES
      await queryRunner.createTable( new Table({
        name: 'orphanages',
        columns: [
          {
          name: "id",
          type: "integer",
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'name',
          type: 'varchar',
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2,
        },
        {
          name: 'about',
          type: 'text',
        },
        {
          name: 'instructions',
          type: 'text',
        },
        {
          name: 'open_on_weekends',
          type: 'boolean',
          default: false,
        },
      ],
      }) )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
      // DESFAZER O QUE FOI FEITO NO UP
      await queryRunner.dropTable('orphanages');
    }

}
