export class WorkflowSequence {
  'active'?: boolean;
  'created'?: Date;
  'format'?: string;
  'id'?: string;
  'incrementBy'?: number;
  'labels'?: Array<string>;
  'updated'?: Date;
  'value'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "active",
      "baseName": "active",
      "type": "boolean"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
    },
    {
      "name": "format",
      "baseName": "format",
      "type": "string"
    },
    {
      "name": "id",
      "baseName": "id",
      "type": "string"
    },
    {
      "name": "incrementBy",
      "baseName": "incrementBy",
      "type": "number"
    },
    {
      "name": "labels",
      "baseName": "labels",
      "type": "Array<string>"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "value",
      "baseName": "value",
      "type": "number"
    }    ];

  static getAttributeTypeMap() {
    return WorkflowSequence.attributeTypeMap;
  }
}
