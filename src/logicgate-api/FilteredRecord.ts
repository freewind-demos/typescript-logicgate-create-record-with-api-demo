import {RecordProperty} from './RecordProperty';
import {RecordDetails} from './RecordDetails';

export class FilteredRecord {
  'assignment'?: RecordDetails;
  'properties'?: Array<RecordProperty>;
  'record'?: RecordDetails;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'assignment',
      'baseName': 'assignment',
      'type': 'RecordDetails',
    },
    {
      'name': 'properties',
      'baseName': 'properties',
      'type': 'Array<RecordProperty>',
    },
    {
      'name': 'record',
      'baseName': 'record',
      'type': 'RecordDetails',
    }];

  static getAttributeTypeMap() {
    return FilteredRecord.attributeTypeMap;
  }
}
