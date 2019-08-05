import {WorkflowMap} from './WorkflowMap';
import {Workflow} from './Workflow';

export class TableReportJoin {
  'active'?: boolean;
  'childrenJoins'?: Array<TableReportJoin>;
  'comesFrom'?: TableReportJoin;
  'comesFromId'?: string;
  'created'?: Date;
  'distinct'?: boolean;
  'id'?: string;
  'isDistinct'?: boolean;
  'joinedThrough'?: WorkflowMap;
  'joinedWorkflow'?: Workflow;
  'labels'?: Array<string>;
  'updated'?: Date;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'childrenJoins',
      'baseName': 'childrenJoins',
      'type': 'Array<TableReportJoin>',
    },
    {
      'name': 'comesFrom',
      'baseName': 'comesFrom',
      'type': 'TableReportJoin',
    },
    {
      'name': 'comesFromId',
      'baseName': 'comesFromId',
      'type': 'string',
    },
    {
      'name': 'created',
      'baseName': 'created',
      'type': 'Date',
    },
    {
      'name': 'distinct',
      'baseName': 'distinct',
      'type': 'boolean',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'isDistinct',
      'baseName': 'isDistinct',
      'type': 'boolean',
    },
    {
      'name': 'joinedThrough',
      'baseName': 'joinedThrough',
      'type': 'WorkflowMap',
    },
    {
      'name': 'joinedWorkflow',
      'baseName': 'joinedWorkflow',
      'type': 'Workflow',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return TableReportJoin.attributeTypeMap;
  }
}
