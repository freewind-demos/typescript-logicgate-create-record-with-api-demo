import {Record} from './Record';

export class ChildResult {
  'children'?: Array<Record>;
  'parent'?: Record;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "children",
      "baseName": "children",
      "type": "Array<Record>"
    },
    {
      "name": "parent",
      "baseName": "parent",
      "type": "Record"
    }    ];

  static getAttributeTypeMap() {
    return ChildResult.attributeTypeMap;
  }
}
