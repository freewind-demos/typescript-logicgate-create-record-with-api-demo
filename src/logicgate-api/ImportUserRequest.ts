import {ImportRequest} from './ImportRequest';

export class ImportUserRequest extends ImportRequest {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'importType'?: string;
  'labels'?: Array<string>;
  'updated'?: Date;

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
      'name': 'importType',
      'baseName': 'importType',
      'type': 'string',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(ImportUserRequest.attributeTypeMap);
  }
}
