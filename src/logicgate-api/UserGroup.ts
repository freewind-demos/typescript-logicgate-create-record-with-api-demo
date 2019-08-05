import {User} from './User';

export class UserGroup {
  'active'?: boolean;
  'assignmentDefault'?: boolean;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'recordDefault'?: boolean;
  'title'?: string;
  'updated'?: Date;
  'users'?: Array<User>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "active",
      "baseName": "active",
      "type": "boolean"
    },
    {
      "name": "assignmentDefault",
      "baseName": "assignmentDefault",
      "type": "boolean"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
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
      "name": "recordDefault",
      "baseName": "recordDefault",
      "type": "boolean"
    },
    {
      "name": "title",
      "baseName": "title",
      "type": "string"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "users",
      "baseName": "users",
      "type": "Array<User>"
    }    ];

  static getAttributeTypeMap() {
    return UserGroup.attributeTypeMap;
  }
}
