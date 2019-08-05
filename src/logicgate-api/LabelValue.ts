import {CurrentValue} from './CurrentValue';
import {Field} from './Field';

export class LabelValue extends CurrentValue {
  'active'?: boolean;
  'archived'?: boolean;
  'color'?: string;
  'created'?: Date;
  '_default'?: boolean;
  'discriminator'?: string;
  'empty'?: boolean;
  'field'?: Field;
  'fieldId'?: string;
  'hasValue'?: Field;
  'icon'?: string;
  'id'?: string;
  'isDefault'?: boolean;
  'labels'?: Array<string>;
  'numericValue'?: number;
  'priority'?: number;
  'textValue'?: string;
  'updated'?: Date;
  'valueType'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'archived',
      'baseName': 'archived',
      'type': 'boolean',
    },
    {
      'name': 'color',
      'baseName': 'color',
      'type': 'string',
    },
    {
      'name': 'created',
      'baseName': 'created',
      'type': 'Date',
    },
    {
      'name': '_default',
      'baseName': 'default',
      'type': 'boolean',
    },
    {
      'name': 'discriminator',
      'baseName': 'discriminator',
      'type': 'string',
    },
    {
      'name': 'empty',
      'baseName': 'empty',
      'type': 'boolean',
    },
    {
      'name': 'field',
      'baseName': 'field',
      'type': 'Field',
    },
    {
      'name': 'fieldId',
      'baseName': 'fieldId',
      'type': 'string',
    },
    {
      'name': 'hasValue',
      'baseName': 'hasValue',
      'type': 'Field',
    },
    {
      'name': 'icon',
      'baseName': 'icon',
      'type': 'string',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'isDefault',
      'baseName': 'isDefault',
      'type': 'boolean',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'numericValue',
      'baseName': 'numericValue',
      'type': 'number',
    },
    {
      'name': 'priority',
      'baseName': 'priority',
      'type': 'number',
    },
    {
      'name': 'textValue',
      'baseName': 'textValue',
      'type': 'string',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'valueType',
      'baseName': 'valueType',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(LabelValue.attributeTypeMap);
  }
}
