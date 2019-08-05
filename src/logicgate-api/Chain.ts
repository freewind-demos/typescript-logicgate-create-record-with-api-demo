import {Step} from './Step';
import {ServiceLevelAgreement} from './ServiceLevelAgreement';
import {Workflow} from './Workflow';

export class Chain extends Step {
  'active'?: boolean;
  /**
   * Allow entitlements to the node.
   */
  'allowEntitlements'?: boolean;
  'chain'?: boolean;
  'contains'?: Workflow;
  'created'?: Date;
  'end'?: boolean;
  'id'?: string;
  /**
   * Allows a node to become a public node.
   */
  'isPublic'?: boolean;
  'labels'?: Array<string>;
  /**
   * Node name.
   */
  'name'?: string;
  'origin'?: boolean;
  /**
   * Determines the node's place in the workflow.
   */
  'priority'?: number;
  '_public'?: boolean;
  /**
   * Object containing all SLA information.
   */
  'sla'?: ServiceLevelAgreement;
  /**
   * Node type.
   */
  'stepType'?: string;
  'updated'?: Date;
  /**
   * Workflow that the node belongs to.
   */
  'workflow'?: Workflow;
  'workflowId'?: string;
  /**
   * Vertical position of the node on the process screen.
   */
  'xpos'?: number;
  /**
   * Horizontal position of the node on the process screen.
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
      "name": "allowEntitlements",
      "baseName": "allowEntitlements",
      "type": "boolean"
    },
    {
      "name": "chain",
      "baseName": "chain",
      "type": "boolean"
    },
    {
      "name": "contains",
      "baseName": "contains",
      "type": "Workflow"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
    },
    {
      "name": "end",
      "baseName": "end",
      "type": "boolean"
    },
    {
      "name": "id",
      "baseName": "id",
      "type": "string"
    },
    {
      "name": "isPublic",
      "baseName": "isPublic",
      "type": "boolean"
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
      "name": "origin",
      "baseName": "origin",
      "type": "boolean"
    },
    {
      "name": "priority",
      "baseName": "priority",
      "type": "number"
    },
    {
      "name": "_public",
      "baseName": "public",
      "type": "boolean"
    },
    {
      "name": "sla",
      "baseName": "sla",
      "type": "ServiceLevelAgreement"
    },
    {
      "name": "stepType",
      "baseName": "stepType",
      "type": "string"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "workflow",
      "baseName": "workflow",
      "type": "Workflow"
    },
    {
      "name": "workflowId",
      "baseName": "workflowId",
      "type": "string"
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
    return super.getAttributeTypeMap().concat(Chain.attributeTypeMap);
  }
}
