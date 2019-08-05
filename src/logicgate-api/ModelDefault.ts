import {LayoutField} from './LayoutField';
import {Layout} from './Layout';
import {Workflow} from './Workflow';

/**
 * The \"default\" layout functions as the application's fallback when there is no workflow specific layout to use or a user specific layout to use.
 */
export class ModelDefault extends Layout {
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
    return super.getAttributeTypeMap().concat(ModelDefault.attributeTypeMap);
  }
}
