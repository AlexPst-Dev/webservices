import { DataSource, ViewColumn, ViewEntity } from 'typeorm';

@ViewEntity({
  expression: (dataSource: DataSource) =>
    dataSource
      .createQueryBuilder()
      .select('*')
      .from('nameofregionbyterritory', 'n'),
})
export class TerritoriesByRegion {
  @ViewColumn()
  id: number;

  @ViewColumn()
  regionName: string;

  @ViewColumn()
  territoryName: string;
}
