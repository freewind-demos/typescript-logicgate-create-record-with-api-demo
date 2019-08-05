import {ReportFilter} from './ReportFilter';
import {LayoutField} from './LayoutField';
import {TableReportJoin} from './TableReportJoin';
import {Layout} from './Layout';
import {Workflow} from './Workflow';

export class TableReport extends Layout {
  'active'?: boolean;
  'created'?: Date;
  'defaultLayout'?: boolean;
  'filterList'?: Array<ReportFilter>;
  'id'?: string;
  'labels'?: Array<string>;
  'layoutFields'?: Array<LayoutField>;
  'title'?: string;
  'updated'?: Date;
  'workflow'?: Workflow;
  'workflowId'?: string;
  'workflowJoins'?: Array<TableReportJoin>;

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
      'name': 'defaultLayout',
      'baseName': 'defaultLayout',
      'type': 'boolean',
    },
    {
      'name': 'filterList',
      'baseName': 'filterList',
      'type': 'Array<ReportFilter>',
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
      'name': 'layoutFields',
      'baseName': 'layoutFields',
      'type': 'Array<LayoutField>',
    },
    {
      'name': 'title',
      'baseName': 'title',
      'type': 'string',
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
      'name': 'workflowJoins',
      'baseName': 'workflowJoins',
      'type': 'Array<TableReportJoin>',
    }];

  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(TableReport.attributeTypeMap);
  }
}
