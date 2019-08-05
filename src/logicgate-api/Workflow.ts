import {Field} from './Field';
import {Process} from './Process';
import {ServiceLevelAgreement} from './ServiceLevelAgreement';
import {Step} from './Step';
import {WorkflowSequence} from './WorkflowSequence';
import {UserGroup} from './UserGroup';
import {WorkflowMap} from './WorkflowMap';

/**
 * An entity that contains information about a set of steps within a particular process.
 */
export class Workflow {
  'active'?: boolean;
  /**
   * Nodes created in the workflow are allowed user groups.
   */
  'allowGroups'?: boolean;
  'canSelect'?: Field;
  'contains'?: Step;
  'created'?: Date;
  'fields'?: Array<Field>;
  'id'?: string;
  'labels'?: Array<string>;
  /**
   * Name of the workflow.
   */
  'name'?: string;
  'nodes'?: Array<Step>;
  'objectName'?: string;
  /**
   * Determines the workflow's place in the process.
   */
  'priority'?: number;
  /**
   * Process that the workflow belongs to.
   */
  'process'?: Process;
  'processId'?: string;
  /**
   * Name to be used for every record created from the workflow.
   */
  'recordPrefix'?: string;
  /**
   * Nodes created in the workflow require user groups.
   */
  'requireGroups'?: boolean;
  'sequence'?: WorkflowSequence;
  /**
   * Object containing all SLA information.
   */
  'sla'?: ServiceLevelAgreement;
  /**
   * List of nodes that the workflow contains.
   */
  'steps'?: Array<Step>;
  'updated'?: Date;
  /**
   * User groups that are allowed access to the workflow
   */
  'userGroups'?: Array<UserGroup>;
  'workflowMaps'?: Array<WorkflowMap>;
  /**
   * X axis position of the workflow on the process screen
   */
  'xpos'?: number;
  /**
   * Y axis position of the workflow on the process screen
   */
  'ypos'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "active",
      "baseName": "active",
      "type": "boolean"
    },
    {
      "name": "allowGroups",
      "baseName": "allowGroups",
      "type": "boolean"
    },
    {
      "name": "canSelect",
      "baseName": "canSelect",
      "type": "Field"
    },
    {
      "name": "contains",
      "baseName": "contains",
      "type": "Step"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
    },
    {
      "name": "fields",
      "baseName": "fields",
      "type": "Array<Field>"
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
      "name": "name",
      "baseName": "name",
      "type": "string"
    },
    {
      "name": "nodes",
      "baseName": "nodes",
      "type": "Array<Step>"
    },
    {
      "name": "objectName",
      "baseName": "objectName",
      "type": "string"
    },
    {
      "name": "priority",
      "baseName": "priority",
      "type": "number"
    },
    {
      "name": "process",
      "baseName": "process",
      "type": "Process"
    },
    {
      "name": "processId",
      "baseName": "processId",
      "type": "string"
    },
    {
      "name": "recordPrefix",
      "baseName": "recordPrefix",
      "type": "string"
    },
    {
      "name": "requireGroups",
      "baseName": "requireGroups",
      "type": "boolean"
    },
    {
      "name": "sequence",
      "baseName": "sequence",
      "type": "WorkflowSequence"
    },
    {
      "name": "sla",
      "baseName": "sla",
      "type": "ServiceLevelAgreement"
    },
    {
      "name": "steps",
      "baseName": "steps",
      "type": "Array<Step>"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "userGroups",
      "baseName": "userGroups",
      "type": "Array<UserGroup>"
    },
    {
      "name": "workflowMaps",
      "baseName": "workflowMaps",
      "type": "Array<WorkflowMap>"
    },
    {
      "name": "xpos",
      "baseName": "xpos",
      "type": "number"
    },
    {
      "name": "ypos",
      "baseName": "ypos",
      "type": "number"
    }    ];

  static getAttributeTypeMap() {
    return Workflow.attributeTypeMap;
  }
}
