import {InputStream} from './InputStream';
import {URI} from './URI';
import {URL} from './URL';

export class Resource {
  'description'?: string;
  'file'?: any;
  'filename'?: string;
  'inputStream'?: InputStream;
  'open'?: boolean;
  'readable'?: boolean;
  'uri'?: URI;
  'url'?: URL;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'description',
      'baseName': 'description',
      'type': 'string',
    },
    {
      'name': 'file',
      'baseName': 'file',
      'type': 'any',
    },
    {
      'name': 'filename',
      'baseName': 'filename',
      'type': 'string',
    },
    {
      'name': 'inputStream',
      'baseName': 'inputStream',
      'type': 'InputStream',
    },
    {
      'name': 'open',
      'baseName': 'open',
      'type': 'boolean',
    },
    {
      'name': 'readable',
      'baseName': 'readable',
      'type': 'boolean',
    },
    {
      'name': 'uri',
      'baseName': 'uri',
      'type': 'URI',
    },
    {
      'name': 'url',
      'baseName': 'url',
      'type': 'URL',
    }];

  static getAttributeTypeMap() {
    return Resource.attributeTypeMap;
  }
}
