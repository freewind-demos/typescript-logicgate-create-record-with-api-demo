import {ModuleEntitlement} from './ModuleEntitlement';
import {StepEntitlement} from './StepEntitlement';

export class Role {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'locked'?: boolean;
  'moduleCount'?: number;
  'moduleEntitlements'?: Array<ModuleEntitlement>;
  'name'?: string;
  'nodeEntitlements'?: Array<StepEntitlement>;
  'stepCount'?: number;
  'stepEntitlements'?: Array<StepEntitlement>;
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
      'name': 'locked',
      'baseName': 'locked',
      'type': 'boolean',
    },
    {
      'name': 'moduleCount',
      'baseName': 'moduleCount',
      'type': 'number',
    },
    {
      'name': 'moduleEntitlements',
      'baseName': 'moduleEntitlements',
      'type': 'Array<ModuleEntitlement>',
    },
    {
      'name': 'name',
      'baseName': 'name',
      'type': 'string',
    },
    {
      'name': 'nodeEntitlements',
      'baseName': 'nodeEntitlements',
      'type': 'Array<StepEntitlement>',
    },
    {
      'name': 'stepCount',
      'baseName': 'stepCount',
      'type': 'number',
    },
    {
      'name': 'stepEntitlements',
      'baseName': 'stepEntitlements',
      'type': 'Array<StepEntitlement>',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return Role.attributeTypeMap;
  }
}
