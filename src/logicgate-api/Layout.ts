import {LayoutField} from './LayoutField';
import {Workflow} from './Workflow';

/**
 * An entity used to group a collection of layout fields related to record data
 */
export class Layout {
  'active'?: boolean;
  'created'?: Date;
  'defaultLayout'?: boolean;
  'id'?: string;
  'labels'?: Array<string>;
  'layoutFields'?: Array<LayoutField>;
  'title'?: string;
  'updated'?: Date;
  'workflow'?: Workflow;
  'workflowId'?: string;

  static discriminator: string | undefined = 'layoutType';

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
      'name': 'defaultLayout',
      'baseName': 'defaultLayout',
      'type': 'boolean',
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
      'name': 'layoutFields',
      'baseName': 'layoutFields',
      'type': 'Array<LayoutField>',
    },
    {
      'name': 'title',
      'baseName': 'title',
      'type': 'string',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'workflow',
      'baseName': 'workflow',
      'type': 'Workflow',
    },
    {
      'name': 'workflowId',
      'baseName': 'workflowId',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return Layout.attributeTypeMap;
  }
}
