import {Role} from './Role';
import {Field} from './Field';
import {AccessAudit} from './AccessAudit';
import {Record} from './Record';

/**
 * Entity for storing all information pertaining to a user.
 */
export class User extends Field {
  'active'?: boolean;
  'archived'?: boolean;
  'assignments'?: Array<Record>;
  'company'?: string;
  'created'?: Date;
  '_default'?: boolean;
  'disabled'?: boolean;
  'discriminator'?: string;
  'email'?: string;
  'empty'?: boolean;
  'field'?: Field;
  'fieldId'?: string;
  'first'?: string;
  'hasValue'?: Field;
  'id'?: string;
  'imageUrl'?: string;
  'intercomHash'?: string;
  'isDefault'?: boolean;
  'labels'?: Array<string>;
  'languageTag'?: string;
  'last'?: string;
  'lastLogin'?: AccessAudit;
  'locked'?: boolean;
  'loginAttempts'?: number;
  'name'?: string;
  'numericValue'?: number;
  'password'?: string;
  'priority'?: number;
  'records'?: Array<Record>;
  'resetPasswordToken'?: string;
  'roles'?: Array<Role>;
  'sendEmail'?: boolean;
  'status'?: string;
  'superUser'?: boolean;
  'textValue'?: string;
  'tier'?: User.TierEnum;
  'timeZone'?: string;
  'updated'?: Date;
  'valueType'?: string;

  static discriminator: string | undefined = "status";

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
      "name": "assignments",
      "baseName": "assignments",
      "type": "Array<Record>"
    },
    {
      "name": "company",
      "baseName": "company",
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
      "name": "disabled",
      "baseName": "disabled",
      "type": "boolean"
    },
    {
      "name": "discriminator",
      "baseName": "discriminator",
      "type": "string"
    },
    {
      "name": "email",
      "baseName": "email",
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
      "name": "first",
      "baseName": "first",
      "type": "string"
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
      "name": "imageUrl",
      "baseName": "imageUrl",
      "type": "string"
    },
    {
      "name": "intercomHash",
      "baseName": "intercomHash",
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
      "name": "languageTag",
      "baseName": "languageTag",
      "type": "string"
    },
    {
      "name": "last",
      "baseName": "last",
      "type": "string"
    },
    {
      "name": "lastLogin",
      "baseName": "lastLogin",
      "type": "AccessAudit"
    },
    {
      "name": "locked",
      "baseName": "locked",
      "type": "boolean"
    },
    {
      "name": "loginAttempts",
      "baseName": "loginAttempts",
      "type": "number"
    },
    {
      "name": "name",
      "baseName": "name",
      "type": "string"
    },
    {
      "name": "numericValue",
      "baseName": "numericValue",
      "type": "number"
    },
    {
      "name": "password",
      "baseName": "password",
      "type": "string"
    },
    {
      "name": "priority",
      "baseName": "priority",
      "type": "number"
    },
    {
      "name": "records",
      "baseName": "records",
      "type": "Array<Record>"
    },
    {
      "name": "resetPasswordToken",
      "baseName": "resetPasswordToken",
      "type": "string"
    },
    {
      "name": "roles",
      "baseName": "roles",
      "type": "Array<Role>"
    },
    {
      "name": "sendEmail",
      "baseName": "sendEmail",
      "type": "boolean"
    },
    {
      "name": "status",
      "baseName": "status",
      "type": "string"
    },
    {
      "name": "superUser",
      "baseName": "superUser",
      "type": "boolean"
    },
    {
      "name": "textValue",
      "baseName": "textValue",
      "type": "string"
    },
    {
      "name": "tier",
      "baseName": "tier",
      "type": "User.TierEnum"
    },
    {
      "name": "timeZone",
      "baseName": "timeZone",
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
    return super.getAttributeTypeMap().concat(User.attributeTypeMap);
  }
}

export namespace User {
  export enum TierEnum {
    PRIMARY = <any> 'PRIMARY',
    SECONDARY = <any> 'SECONDARY',
    LIMITED = <any> 'LIMITED'
  }
}
