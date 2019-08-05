import {CurrentValue} from './CurrentValue';
import {Field} from './Field';
import {Record} from './Record';
import {Step} from './Step';
import {User} from './User';

export class ValueMap {
  'active'?: boolean;
  'assignment'?: Record;
  'created'?: Date;
  'currentValues'?: Array<CurrentValue>;
  'expressionResult'?: number;
  'field'?: Field;
  'id'?: string;
  'labels'?: Array<string>;
  'node'?: Step;
  'record'?: Record;
  'step'?: Step;
  'updated'?: Date;
  'user'?: User;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "active",
      "baseName": "active",
      "type": "boolean"
    },
    {
      "name": "assignment",
      "baseName": "assignment",
      "type": "Record"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
    },
    {
      "name": "currentValues",
      "baseName": "currentValues",
      "type": "Array<CurrentValue>"
    },
    {
      "name": "expressionResult",
      "baseName": "expressionResult",
      "type": "number"
    },
    {
      "name": "field",
      "baseName": "field",
      "type": "Field"
    },
    {
      "name": "id",
      "baseName": "id",
      "type": "string"
    },
    {
      "name": "labels",
      "baseName": "labels",
      "type": "Array<string>"
    },
    {
      "name": "node",
      "baseName": "node",
      "type": "Step"
    },
    {
      "name": "record",
      "baseName": "record",
      "type": "Record"
    },
    {
      "name": "step",
      "baseName": "step",
      "type": "Step"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "user",
      "baseName": "user",
      "type": "User"
    }    ];

  static getAttributeTypeMap() {
    return ValueMap.attributeTypeMap;
  }
}
