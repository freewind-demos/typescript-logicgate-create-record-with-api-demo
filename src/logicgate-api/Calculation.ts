import {Field} from './Field';
import {FieldInput} from './FieldInput';
import {CurrentValue} from './CurrentValue';
import {Workflow} from './Workflow';

export class Calculation extends Field {
  'active'?: boolean;
  'convertibleTo'?: Array<string>;
  'created'?: Date;
  /**
   * Relationship to current values that are associated to the field.
   */
  'currentValues'?: Array<CurrentValue>;
  'discrete'?: boolean;
  'expression'?: string;
  /**
   * Fields used to evaluate the expression of the calculation
   */
  'fieldInputs'?: Array<FieldInput>;
  'fieldType': Calculation.FieldTypeEnum;
  'global'?: boolean;
  'id'?: string;
  /**
   * The label will appear as the label for the field when it appears on forms for user's to complete.
   */
  'label'?: string;
  'labels'?: Array<string>;
  'labelsEnabled'?: boolean;
  'logicalHandling'?: Calculation.LogicalHandlingEnum;
  /**
   * The name of the field.
   */
  'name'?: string;
  'nullStrategy'?: Calculation.NullStrategyEnum;
  'operators'?: Array<Calculation.OperatorsEnum>;
  /**
   * A text value that will populate any tooltip information.
   */
  'tooltip'?: string;
  'updated'?: Date;
  'valueType'?: string;
  /**
   * Workflow object that is associated to the field.
   */
  'workflow'?: Workflow;
  'workflowId'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "active",
      "baseName": "active",
      "type": "boolean"
    },
    {
      "name": "convertibleTo",
      "baseName": "convertibleTo",
      "type": "Array<string>"
    },
    {
      "name": "created",
      "baseName": "created",
      "type": "Date"
    },
    {
      "name": "currentValues",
      "baseName": "currentValues",
      "type": "Array<CurrentValue>"
    },
    {
      "name": "discrete",
      "baseName": "discrete",
      "type": "boolean"
    },
    {
      "name": "expression",
      "baseName": "expression",
      "type": "string"
    },
    {
      "name": "fieldInputs",
      "baseName": "fieldInputs",
      "type": "Array<FieldInput>"
    },
    {
      "name": "fieldType",
      "baseName": "fieldType",
      "type": "Calculation.FieldTypeEnum"
    },
    {
      "name": "global",
      "baseName": "global",
      "type": "boolean"
    },
    {
      "name": "id",
      "baseName": "id",
      "type": "string"
    },
    {
      "name": "label",
      "baseName": "label",
      "type": "string"
    },
    {
      "name": "labels",
      "baseName": "labels",
      "type": "Array<string>"
    },
    {
      "name": "labelsEnabled",
      "baseName": "labelsEnabled",
      "type": "boolean"
    },
    {
      "name": "logicalHandling",
      "baseName": "logicalHandling",
      "type": "Calculation.LogicalHandlingEnum"
    },
    {
      "name": "name",
      "baseName": "name",
      "type": "string"
    },
    {
      "name": "nullStrategy",
      "baseName": "nullStrategy",
      "type": "Calculation.NullStrategyEnum"
    },
    {
      "name": "operators",
      "baseName": "operators",
      "type": "Array<Calculation.OperatorsEnum>"
    },
    {
      "name": "tooltip",
      "baseName": "tooltip",
      "type": "string"
    },
    {
      "name": "updated",
      "baseName": "updated",
      "type": "Date"
    },
    {
      "name": "valueType",
      "baseName": "valueType",
      "type": "string"
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
    }    ];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(Calculation.attributeTypeMap);
  }
}

export namespace Calculation {
  export enum FieldTypeEnum {
    TEXT = <any> 'TEXT',
    TEXTAREA = <any> 'TEXT_AREA',
    DATEPICKER = <any> 'DATE_PICKER',
    NUMBER = <any> 'NUMBER',
    ESIGNATURE = <any> 'E_SIGNATURE',
    CHECKBOX = <any> 'CHECKBOX',
    MULTISELECT = <any> 'MULTI_SELECT',
    RADIO = <any> 'RADIO',
    SELECT = <any> 'SELECT',
    USER = <any> 'USER',
    ATTACHMENT = <any> 'ATTACHMENT',
    CALCULATION = <any> 'CALCULATION',
    DUEDATE = <any> 'DUE_DATE'
  }
  export enum LogicalHandlingEnum {
    EQUALS = <any> 'EQUALS',
    NOTEQUALS = <any> 'NOT_EQUALS',
    GREATERTHAN = <any> 'GREATER_THAN',
    GREATERTHANEQUALS = <any> 'GREATER_THAN_EQUALS',
    LESSTHAN = <any> 'LESS_THAN',
    LESSTHANEQUALS = <any> 'LESS_THAN_EQUALS',
    CONTAINS = <any> 'CONTAINS',
    DOESNOTCONTAIN = <any> 'DOES_NOT_CONTAIN',
    NULL = <any> 'NULL',
    NOTNULL = <any> 'NOT_NULL',
    MATCHES = <any> 'MATCHES',
    DATERANGE = <any> 'DATE_RANGE'
  }
  export enum NullStrategyEnum {
    NULL = <any> 'NULL',
    ZERO = <any> 'ZERO',
    ONE = <any> 'ONE'
  }
  export enum OperatorsEnum {
    EQUALS = <any> 'EQUALS',
    NOTEQUALS = <any> 'NOT_EQUALS',
    GREATERTHAN = <any> 'GREATER_THAN',
    GREATERTHANEQUALS = <any> 'GREATER_THAN_EQUALS',
    LESSTHAN = <any> 'LESS_THAN',
    LESSTHANEQUALS = <any> 'LESS_THAN_EQUALS',
    CONTAINS = <any> 'CONTAINS',
    DOESNOTCONTAIN = <any> 'DOES_NOT_CONTAIN',
    NULL = <any> 'NULL',
    NOTNULL = <any> 'NOT_NULL',
    MATCHES = <any> 'MATCHES',
    DATERANGE = <any> 'DATE_RANGE'
  }
}
