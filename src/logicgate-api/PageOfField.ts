import {Field} from './Field';
import {Sort} from './Sort';

export class PageOfField {
  'content'?: Array<Field>;
  'empty'?: boolean;
  'first'?: boolean;
  'last'?: boolean;
  'number'?: number;
  'numberOfElements'?: number;
  'size'?: number;
  'sort'?: Sort;
  'totalElements'?: number;
  'totalPages'?: number;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'content',
      'baseName': 'content',
      'type': 'Array<Field>',
    },
    {
      'name': 'empty',
      'baseName': 'empty',
      'type': 'boolean',
    },
    {
      'name': 'first',
      'baseName': 'first',
      'type': 'boolean',
    },
    {
      'name': 'last',
      'baseName': 'last',
      'type': 'boolean',
    },
    {
      'name': 'number',
      'baseName': 'number',
      'type': 'number',
    },
    {
      'name': 'numberOfElements',
      'baseName': 'numberOfElements',
      'type': 'number',
    },
    {
      'name': 'size',
      'baseName': 'size',
      'type': 'number',
    },
    {
      'name': 'sort',
      'baseName': 'sort',
      'type': 'Sort',
    },
    {
      'name': 'totalElements',
      'baseName': 'totalElements',
      'type': 'number',
    },
    {
      'name': 'totalPages',
      'baseName': 'totalPages',
      'type': 'number',
    }];

  static getAttributeTypeMap() {
    return PageOfField.attributeTypeMap;
  }
}
