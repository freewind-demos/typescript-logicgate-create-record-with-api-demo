import {CurrentValue} from './CurrentValue';
import {Field} from './Field';

export class CurrentDateRangeValue extends CurrentValue {
  'active'?: boolean;
  'archived'?: boolean;
  'created'?: Date;
  '_default'?: boolean;
  'defaultToNow'?: boolean;
  'discriminator'?: string;
  'empty'?: boolean;
  'endTemporalValue'?: Date;
  'field'?: Field;
  'fieldId'?: string;
  'hasTime'?: boolean;
  'hasValue'?: Field;
  'id'?: string;
  'isDefault'?: boolean;
  'labels'?: Array<string>;
  'numericValue'?: number;
  'priority'?: number;
  'temporalValue'?: Date;
  'textValue'?: string;
  'updated'?: Date;
  'valueType'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "active",
      "baseName": "active",
      "type": "boolean"
    },
    {
      "name": "archived",
      "baseName": "archived",
      "type": "boolean"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
    },
    {
      "name": "_default",
      "baseName": "default",
      "type": "boolean"
    },
    {
      "name": "defaultToNow",
      "baseName": "defaultToNow",
      "type": "boolean"
    },
    {
      "name": "discriminator",
      "baseName": "discriminator",
      "type": "string"
    },
    {
      "name": "empty",
      "baseName": "empty",
      "type": "boolean"
    },
    {
      "name": "endTemporalValue",
      "baseName": "endTemporalValue",
      "type": "Date"
    },
    {
      "name": "field",
      "baseName": "field",
      "type": "Field"
    },
    {
      "name": "fieldId",
      "baseName": "fieldId",
      "type": "string"
    },
    {
      "name": "hasTime",
      "baseName": "hasTime",
      "type": "boolean"
    },
    {
      "name": "hasValue",
      "baseName": "hasValue",
      "type": "Field"
    },
    {
      "name": "id",
      "baseName": "id",
      "type": "string"
    },
    {
      "name": "isDefault",
      "baseName": "isDefault",
      "type": "boolean"
    },
    {
      "name": "labels",
      "baseName": "labels",
      "type": "Array<string>"
    },
    {
      "name": "numericValue",
      "baseName": "numericValue",
      "type": "number"
    },
    {
      "name": "priority",
      "baseName": "priority",
      "type": "number"
    },
    {
      "name": "temporalValue",
      "baseName": "temporalValue",
      "type": "Date"
    },
    {
      "name": "textValue",
      "baseName": "textValue",
      "type": "string"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "valueType",
      "baseName": "valueType",
      "type": "string"
    }    ];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(CurrentDateRangeValue.attributeTypeMap);
  }
}
