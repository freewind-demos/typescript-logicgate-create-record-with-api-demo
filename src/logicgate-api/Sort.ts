export class Sort {
  'empty'?: boolean;
  'sorted'?: boolean;
  'unsorted'?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'empty',
      'baseName': 'empty',
      'type': 'boolean',
    },
    {
      'name': 'sorted',
      'baseName': 'sorted',
      'type': 'boolean',
    },
    {
      'name': 'unsorted',
      'baseName': 'unsorted',
      'type': 'boolean',
    }];

  static getAttributeTypeMap() {
    return Sort.attributeTypeMap;
  }
}
