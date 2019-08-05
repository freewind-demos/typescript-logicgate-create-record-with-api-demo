import {Step} from './Step';
import {User} from './User';
import {ValueMap} from './ValueMap';
import {UserGroup} from './UserGroup';
import {Workflow} from './Workflow';

export class Record {
  'active'?: boolean;
  'activeDate'?: Date;
  'assignee'?: User;
  'assignments'?: Array<Record>;
  'created'?: Date;
  'creator'?: User;
  'currentValueMaps'?: Array<ValueMap>;
  'dueDate'?: Date;
  'enteredNodeDate'?: Date;
  'enteredStepDate'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'name'?: string;
  'node'?: Step;
  'nodeDueDate'?: Date;
  'origin'?: Step;
  '_public'?: boolean;
  'records'?: Array<Record>;
  'sequenceId'?: number;
  'status'?: Record.StatusEnum;
  'step'?: Step;
  'stepDueDate'?: Date;
  'updated'?: Date;
  'user'?: User;
  'userDate'?: Date;
  'userGroups'?: Array<UserGroup>;
  'workflow'?: Workflow;
  'workflowDueDate'?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'activeDate',
      'baseName': 'activeDate',
      'type': 'Date',
    },
    {
      'name': 'assignee',
      'baseName': 'assignee',
      'type': 'User',
    },
    {
      'name': 'assignments',
      'baseName': 'assignments',
      'type': 'Array<Record>',
    },
    {
      'name': 'created',
      'baseName': 'created',
      'type': 'Date',
    },
    {
      'name': 'creator',
      'baseName': 'creator',
      'type': 'User',
    },
    {
      'name': 'currentValueMaps',
      'baseName': 'currentValueMaps',
      'type': 'Array<ValueMap>',
    },
    {
      'name': 'dueDate',
      'baseName': 'dueDate',
      'type': 'Date',
    },
    {
      'name': 'enteredNodeDate',
      'baseName': 'enteredNodeDate',
      'type': 'Date',
    },
    {
      'name': 'enteredStepDate',
      'baseName': 'enteredStepDate',
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
      'name': 'name',
      'baseName': 'name',
      'type': 'string',
    },
    {
      'name': 'node',
      'baseName': 'node',
      'type': 'Step',
    },
    {
      'name': 'nodeDueDate',
      'baseName': 'nodeDueDate',
      'type': 'Date',
    },
    {
      'name': 'origin',
      'baseName': 'origin',
      'type': 'Step',
    },
    {
      'name': '_public',
      'baseName': 'public',
      'type': 'boolean',
    },
    {
      'name': 'records',
      'baseName': 'records',
      'type': 'Array<Record>',
    },
    {
      'name': 'sequenceId',
      'baseName': 'sequenceId',
      'type': 'number',
    },
    {
      'name': 'status',
      'baseName': 'status',
      'type': 'Record.StatusEnum',
    },
    {
      'name': 'step',
      'baseName': 'step',
      'type': 'Step',
    },
    {
      'name': 'stepDueDate',
      'baseName': 'stepDueDate',
      'type': 'Date',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'user',
      'baseName': 'user',
      'type': 'User',
    },
    {
      'name': 'userDate',
      'baseName': 'userDate',
      'type': 'Date',
    },
    {
      'name': 'userGroups',
      'baseName': 'userGroups',
      'type': 'Array<UserGroup>',
    },
    {
      'name': 'workflow',
      'baseName': 'workflow',
      'type': 'Workflow',
    },
    {
      'name': 'workflowDueDate',
      'baseName': 'workflowDueDate',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return Record.attributeTypeMap;
  }
}

export namespace Record {
  export enum StatusEnum {
    INACTIVE = <any>'INACTIVE',
    NOTASSIGNED = <any>'NOT_ASSIGNED',
    ASSIGNED = <any>'ASSIGNED',
    INPROGRESS = <any>'IN_PROGRESS',
    COMPLETE = <any>'COMPLETE'
  }
}
