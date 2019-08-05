import {Module} from './Module';
import {Role} from './Role';

export class ModuleEntitlement {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'module'?: Module;
  'operationType'?: string;
  'role'?: Role;
  'updated'?: Date;

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
      'name': 'module',
      'baseName': 'module',
      'type': 'Module',
    },
    {
      'name': 'operationType',
      'baseName': 'operationType',
      'type': 'string',
    },
    {
      'name': 'role',
      'baseName': 'role',
      'type': 'Role',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return ModuleEntitlement.attributeTypeMap;
  }
}
