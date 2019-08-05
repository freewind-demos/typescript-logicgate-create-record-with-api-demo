import {Layout} from './Layout';
import {Step} from './Step';
import {ImportRequest} from './ImportRequest';

export class ImportRecordRequest extends ImportRequest {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'importType'?: string;
  'labels'?: Array<string>;
  'layout'?: Layout;
  'targetStep'?: Step;
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
      'name': 'layout',
      'baseName': 'layout',
      'type': 'Layout',
    },
    {
      'name': 'targetStep',
      'baseName': 'targetStep',
      'type': 'Step',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(ImportRecordRequest.attributeTypeMap);
  }
}
