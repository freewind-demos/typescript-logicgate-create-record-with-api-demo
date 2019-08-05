import {Step} from './Step';
import {Workflow} from './Workflow';

export class RecordDetails {
  'canEdit'?: boolean;
  'canRead'?: boolean;
  'depth'?: number;
  'dueDate'?: Date;
  'id'?: string;
  'name'?: string;
  'step'?: Step;
  'stepEnd'?: boolean;
  'stepId'?: string;
  'user'?: boolean;
  'workflow'?: Workflow;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'canEdit',
      'baseName': 'canEdit',
      'type': 'boolean',
    },
    {
      'name': 'canRead',
      'baseName': 'canRead',
      'type': 'boolean',
    },
    {
      'name': 'depth',
      'baseName': 'depth',
      'type': 'number',
    },
    {
      'name': 'dueDate',
      'baseName': 'dueDate',
      'type': 'Date',
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
    },
    {
      'name': 'step',
      'baseName': 'step',
      'type': 'Step',
    },
    {
      'name': 'stepEnd',
      'baseName': 'stepEnd',
      'type': 'boolean',
    },
    {
      'name': 'stepId',
      'baseName': 'stepId',
      'type': 'string',
    },
    {
      'name': 'user',
      'baseName': 'user',
      'type': 'boolean',
    },
    {
      'name': 'workflow',
      'baseName': 'workflow',
      'type': 'Workflow',
    }];

  static getAttributeTypeMap() {
    return RecordDetails.attributeTypeMap;
  }
}
