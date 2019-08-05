import {Process} from './Process';

export class WorkflowResult {
  'assignments'?: number;
  'assignmentsComplete'?: number;
  'assignmentsOverdue'?: number;
  'depth'?: number;
  'id'?: string;
  'name'?: string;
  'process'?: Process;
  'recordPrefix'?: string;
  'records'?: number;
  'recordsComplete'?: number;
  'recordsOverdue'?: number;
  'steps'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    {
      "name": "assignments",
      "baseName": "assignments",
      "type": "number"
    },
    {
      "name": "assignmentsComplete",
      "baseName": "assignmentsComplete",
      "type": "number"
    },
    {
      "name": "assignmentsOverdue",
      "baseName": "assignmentsOverdue",
      "type": "number"
    },
    {
      "name": "depth",
      "baseName": "depth",
      "type": "number"
    },
    {
      "name": "id",
      "baseName": "id",
      "type": "string"
    },
    {
      "name": "name",
      "baseName": "name",
      "type": "string"
    },
    {
      "name": "process",
      "baseName": "process",
      "type": "Process"
    },
    {
      "name": "recordPrefix",
      "baseName": "recordPrefix",
      "type": "string"
    },
    {
      "name": "records",
      "baseName": "records",
      "type": "number"
    },
    {
      "name": "recordsComplete",
      "baseName": "recordsComplete",
      "type": "number"
    },
    {
      "name": "recordsOverdue",
      "baseName": "recordsOverdue",
      "type": "number"
    },
    {
      "name": "steps",
      "baseName": "steps",
      "type": "number"
    }    ];

  static getAttributeTypeMap() {
    return WorkflowResult.attributeTypeMap;
  }
}
