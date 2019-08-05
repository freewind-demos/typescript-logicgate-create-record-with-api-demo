import {WorkflowMap} from './WorkflowMap';
import {WorkflowResult} from './WorkflowResult';
import {Workflow} from './Workflow';

export class OneToOne extends WorkflowMap {
  'active'?: boolean;
  'childId'?: string;
  'created'?: Date;
  'id'?: string;
  'labels'?: Array<string>;
  'parentId'?: string;
  'parentResult'?: WorkflowResult;
  /**
   * Parent workflow.
   */
  'parentWorkflow'?: Workflow;
  'updated'?: Date;
  /**
   * Child workflow to be connected.
   */
  'workflow'?: Workflow;
  'workflowMapType'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'childId',
      'baseName': 'childId',
      'type': 'string',
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
      'name': 'parentId',
      'baseName': 'parentId',
      'type': 'string',
    },
    {
      'name': 'parentResult',
      'baseName': 'parentResult',
      'type': 'WorkflowResult',
    },
    {
      'name': 'parentWorkflow',
      'baseName': 'parentWorkflow',
      'type': 'Workflow',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'workflow',
      'baseName': 'workflow',
      'type': 'Workflow',
    },
    {
      'name': 'workflowMapType',
      'baseName': 'workflowMapType',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(OneToOne.attributeTypeMap);
  }
}
