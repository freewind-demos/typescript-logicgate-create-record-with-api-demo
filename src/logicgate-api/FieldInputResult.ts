export class FieldInputResult {
  'fieldType'?: string;
  'id'?: string;
  'name'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'fieldType',
      'baseName': 'fieldType',
      'type': 'string',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'name',
      'baseName': 'name',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return FieldInputResult.attributeTypeMap;
  }
}
