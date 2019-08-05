import {AccessAudit} from './AccessAudit';

export class LogInFail extends AccessAudit {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'remoteAddress'?: string;
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
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'remoteAddress',
      'baseName': 'remoteAddress',
      'type': 'string',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(LogInFail.attributeTypeMap);
  }
}
