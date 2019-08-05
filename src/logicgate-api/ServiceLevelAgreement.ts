export class ServiceLevelAgreement {
  'duration'?: number;
  'enabled'?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'duration',
      'baseName': 'duration',
      'type': 'number',
    },
    {
      'name': 'enabled',
      'baseName': 'enabled',
      'type': 'boolean',
    }];

  static getAttributeTypeMap() {
    return ServiceLevelAgreement.attributeTypeMap;
  }
}
