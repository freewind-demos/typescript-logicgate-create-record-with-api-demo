import {Step} from './Step';
import {Role} from './Role';

export class StepEntitlement {
  'active'?: boolean;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'node'?: Step;
  'operationType'?: string;
  'role'?: Role;
  'step'?: Step;
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
      'name': 'node',
      'baseName': 'node',
      'type': 'Step',
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
      'name': 'step',
      'baseName': 'step',
      'type': 'Step',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return StepEntitlement.attributeTypeMap;
  }
}
