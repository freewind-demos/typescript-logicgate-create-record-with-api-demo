import {Field} from './Field';
import {GraphEntity} from './GraphEntity';
import {CurrentValue} from './CurrentValue';
import {Workflow} from './Workflow';

export class ReportFilter {
  'active'?: boolean;
  'created'?: Date;
  'field'?: Field;
  'filteredRelativeIds'?: Array<string>;
  'filteredRelatives'?: Array<GraphEntity>;
  'fixed'?: boolean;
  'id'?: string;
  'labels'?: Array<string>;
  'operator'?: ReportFilter.OperatorEnum;
  'recordRelationship'?: ReportFilter.RecordRelationshipEnum;
  'systemField'?: ReportFilter.SystemFieldEnum;
  'updated'?: Date;
  'valid'?: boolean;
  'values'?: Array<CurrentValue>;
  'workflow'?: Workflow;
  'workflowId'?: string;

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
      'name': 'field',
      'baseName': 'field',
      'type': 'Field',
    },
    {
      'name': 'filteredRelativeIds',
      'baseName': 'filteredRelativeIds',
      'type': 'Array<string>',
    },
    {
      'name': 'filteredRelatives',
      'baseName': 'filteredRelatives',
      'type': 'Array<GraphEntity>',
    },
    {
      'name': 'fixed',
      'baseName': 'fixed',
      'type': 'boolean',
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
      'name': 'operator',
      'baseName': 'operator',
      'type': 'ReportFilter.OperatorEnum',
    },
    {
      'name': 'recordRelationship',
      'baseName': 'recordRelationship',
      'type': 'ReportFilter.RecordRelationshipEnum',
    },
    {
      'name': 'systemField',
      'baseName': 'systemField',
      'type': 'ReportFilter.SystemFieldEnum',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'valid',
      'baseName': 'valid',
      'type': 'boolean',
    },
    {
      'name': 'values',
      'baseName': 'values',
      'type': 'Array<CurrentValue>',
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
    }];

  static getAttributeTypeMap() {
    return ReportFilter.attributeTypeMap;
  }
}

export namespace ReportFilter {
  export enum OperatorEnum {
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

  export enum RecordRelationshipEnum {
    CURRENTSTEP = <any>'CURRENT_STEP',
    ORIGINSTEP = <any>'ORIGIN_STEP'
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
