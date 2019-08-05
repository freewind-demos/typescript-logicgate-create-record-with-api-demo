import {Field} from './Field';
import {CurrentValue} from './CurrentValue';

export class CleanAttachment extends CurrentValue {
  'active'?: boolean;
  'archived'?: boolean;
  'attachmentStatus'?: CleanAttachment.AttachmentStatusEnum;
  'awsS3Key'?: string;
  'contentType'?: string;
  'created'?: Date;
  '_default'?: boolean;
  'discriminator'?: string;
  'empty'?: boolean;
  'field'?: Field;
  'fieldId'?: string;
  'fileExtension'?: string;
  'fileSize'?: number;
  'hasValue'?: Field;
  'id'?: string;
  'isDefault'?: boolean;
  'labels'?: Array<string>;
  'numericValue'?: number;
  'originalFileExtension'?: string;
  'priority'?: number;
  'textValue'?: string;
  'updated'?: Date;
  'valueType'?: string;
  'versionCount'?: number;

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
      "name": "attachmentStatus",
      "baseName": "attachmentStatus",
      "type": "CleanAttachment.AttachmentStatusEnum"
    },
    {
      "name": "awsS3Key",
      "baseName": "awsS3Key",
      "type": "string"
    },
    {
      "name": "contentType",
      "baseName": "contentType",
      "type": "string"
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
      "name": "fileExtension",
      "baseName": "fileExtension",
      "type": "string"
    },
    {
      "name": "fileSize",
      "baseName": "fileSize",
      "type": "number"
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
      "name": "originalFileExtension",
      "baseName": "originalFileExtension",
      "type": "string"
    },
    {
      "name": "priority",
      "baseName": "priority",
      "type": "number"
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
    },
    {
      "name": "versionCount",
      "baseName": "versionCount",
      "type": "number"
    }    ];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(CleanAttachment.attributeTypeMap);
  }
}

export namespace CleanAttachment {
  export enum AttachmentStatusEnum {
    PENDING = <any> 'PENDING',
    CLEAN = <any> 'CLEAN',
    DIRTY = <any> 'DIRTY'
  }
}
