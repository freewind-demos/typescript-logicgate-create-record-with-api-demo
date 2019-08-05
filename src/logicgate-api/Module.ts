export class Module {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'name'?: string;
  'onlyUse'?: boolean;
  'tab'?: string;
  'updated'?: Date;
  'value'?: Module.ValueEnum;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'created',
      'baseName': 'created',
      'type': 'Date',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'name',
      'baseName': 'name',
      'type': 'string',
    },
    {
      'name': 'onlyUse',
      'baseName': 'onlyUse',
      'type': 'boolean',
    },
    {
      'name': 'tab',
      'baseName': 'tab',
      'type': 'string',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'value',
      'baseName': 'value',
      'type': 'Module.ValueEnum',
    }];

  static getAttributeTypeMap() {
    return Module.attributeTypeMap;
  }
}

export namespace Module {
  export enum ValueEnum {
    AASSIGN = <any> 'A_ASSIGN',
    AIMPORT = <any> 'A_IMPORT',
    AALLFIELDS = <any> 'A_ALL_FIELDS',
    ABUILD = <any> 'A_BUILD',
    AAPIACCESS = <any> 'A_API_ACCESS',
    RRECORDS = <any> 'R_RECORDS',
    RSTATUS = <any> 'R_STATUS',
    RPRODUCTIVITY = <any> 'R_PRODUCTIVITY',
    RTABLEREPORTS = <any> 'R_TABLE_REPORTS',
    RDASHBOARDS = <any> 'R_DASHBOARDS',
    ADMINALL = <any> 'ADMIN_ALL'
  }
}
