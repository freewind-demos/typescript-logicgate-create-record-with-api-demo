import {Field} from './Field';
import {Workflow} from './Workflow';
import {WorkflowMap} from './WorkflowMap';

export class LayoutField {
  'active'?: boolean;
  'category'?: LayoutField.CategoryEnum;
  'created'?: Date;
  'direction'?: LayoutField.DirectionEnum;
  'field'?: Field;
  'fieldId'?: string;
  'header'?: string;
  'headerOrFieldName'?: string;
  'id'?: string;
  'labelDisplayType'?: LayoutField.LabelDisplayTypeEnum;
  'labels'?: Array<string>;
  'layoutId'?: string;
  'link'?: boolean;
  'operators'?: Array<LayoutField.OperatorsEnum>;
  'priority'?: number;
  'sortProperty'?: string;
  'sortable'?: boolean;
  'systemField'?: LayoutField.SystemFieldEnum;
  'toDelete'?: boolean;
  'updated'?: Date;
  'workflow'?: Workflow;
  'workflowId'?: string;
  'workflowMap'?: WorkflowMap;
  'workflowMapId'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'category',
      'baseName': 'category',
      'type': 'LayoutField.CategoryEnum',
    },
    {
      'name': 'created',
      'baseName': 'created',
      'type': 'Date',
    },
    {
      'name': 'direction',
      'baseName': 'direction',
      'type': 'LayoutField.DirectionEnum',
    },
    {
      'name': 'field',
      'baseName': 'field',
      'type': 'Field',
    },
    {
      'name': 'fieldId',
      'baseName': 'fieldId',
      'type': 'string',
    },
    {
      'name': 'header',
      'baseName': 'header',
      'type': 'string',
    },
    {
      'name': 'headerOrFieldName',
      'baseName': 'headerOrFieldName',
      'type': 'string',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'labelDisplayType',
      'baseName': 'labelDisplayType',
      'type': 'LayoutField.LabelDisplayTypeEnum',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'layoutId',
      'baseName': 'layoutId',
      'type': 'string',
    },
    {
      'name': 'link',
      'baseName': 'link',
      'type': 'boolean',
    },
    {
      'name': 'operators',
      'baseName': 'operators',
      'type': 'Array<LayoutField.OperatorsEnum>',
    },
    {
      'name': 'priority',
      'baseName': 'priority',
      'type': 'number',
    },
    {
      'name': 'sortProperty',
      'baseName': 'sortProperty',
      'type': 'string',
    },
    {
      'name': 'sortable',
      'baseName': 'sortable',
      'type': 'boolean',
    },
    {
      'name': 'systemField',
      'baseName': 'systemField',
      'type': 'LayoutField.SystemFieldEnum',
    },
    {
      'name': 'toDelete',
      'baseName': 'toDelete',
      'type': 'boolean',
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
      'name': 'workflowId',
      'baseName': 'workflowId',
      'type': 'string',
    },
    {
      'name': 'workflowMap',
      'baseName': 'workflowMap',
      'type': 'WorkflowMap',
    },
    {
      'name': 'workflowMapId',
      'baseName': 'workflowMapId',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return LayoutField.attributeTypeMap;
  }
}

export namespace LayoutField {
  export enum CategoryEnum {
    RECORD = <any>'RECORD',
    USERS = <any>'USERS',
    PROCESS = <any>'PROCESS',
    WORKFLOW = <any>'WORKFLOW',
    GLOBAL = <any>'GLOBAL'
  }

  export enum DirectionEnum {
    ASC = <any>'ASC',
    DESC = <any>'DESC'
  }

  export enum LabelDisplayTypeEnum {
    VALUE = <any>'VALUE',
    LABEL = <any>'LABEL',
    ALL = <any>'ALL'
  }

  export enum OperatorsEnum {
    EQUALS = <any>'EQUALS',
    NOTEQUALS = <any>'NOT_EQUALS',
    GREATERTHAN = <any>'GREATER_THAN',
    GREATERTHANEQUALS = <any>'GREATER_THAN_EQUALS',
    LESSTHAN = <any>'LESS_THAN',
    LESSTHANEQUALS = <any>'LESS_THAN_EQUALS',
    CONTAINS = <any>'CONTAINS',
    DOESNOTCONTAIN = <any>'DOES_NOT_CONTAIN',
    NULL = <any>'NULL',
    NOTNULL = <any>'NOT_NULL',
    MATCHES = <any>'MATCHES',
    DATERANGE = <any>'DATE_RANGE'
  }

  export enum SystemFieldEnum {
    NAME = <any>'NAME',
    STATUS = <any>'STATUS',
    CREATED = <any>'CREATED',
    USERDATE = <any>'USER_DATE',
    EFFECTIVEDUEDATE = <any>'EFFECTIVE_DUE_DATE',
    DUEDATE = <any>'DUE_DATE',
    ID = <any>'ID',
    USERNAME = <any>'USER_NAME',
    USERID = <any>'USER_ID',
    CREATORNAME = <any>'CREATOR_NAME',
    USERGROUP = <any>'USER_GROUP',
    STEPNAME = <any>'STEP_NAME',
    STEPID = <any>'STEP_ID',
    ORIGINNAME = <any>'ORIGIN_NAME',
    WORKFLOWNAME = <any>'WORKFLOW_NAME',
    WORKFLOWRECORDPREFIX = <any>'WORKFLOW_RECORD_PREFIX',
    WORKFLOWID = <any>'WORKFLOW_ID'
  }
}
