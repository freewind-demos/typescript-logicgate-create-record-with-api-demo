import {URLStreamHandler} from './URLStreamHandler';

export class URL {
  'authority'?: string;
  'content'?: any;
  'defaultPort'?: number;
  'deserializedFields'?: URLStreamHandler;
  'file'?: string;
  'host'?: string;
  'path'?: string;
  'port'?: number;
  'protocol'?: string;
  'query'?: string;
  'ref'?: string;
  'serializedHashCode'?: number;
  'userInfo'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'authority',
      'baseName': 'authority',
      'type': 'string',
    },
    {
      'name': 'content',
      'baseName': 'content',
      'type': 'any',
    },
    {
      'name': 'defaultPort',
      'baseName': 'defaultPort',
      'type': 'number',
    },
    {
      'name': 'deserializedFields',
      'baseName': 'deserializedFields',
      'type': 'URLStreamHandler',
    },
    {
      'name': 'file',
      'baseName': 'file',
      'type': 'string',
    },
    {
      'name': 'host',
      'baseName': 'host',
      'type': 'string',
    },
    {
      'name': 'path',
      'baseName': 'path',
      'type': 'string',
    },
    {
      'name': 'port',
      'baseName': 'port',
      'type': 'number',
    },
    {
      'name': 'protocol',
      'baseName': 'protocol',
      'type': 'string',
    },
    {
      'name': 'query',
      'baseName': 'query',
      'type': 'string',
    },
    {
      'name': 'ref',
      'baseName': 'ref',
      'type': 'string',
    },
    {
      'name': 'serializedHashCode',
      'baseName': 'serializedHashCode',
      'type': 'number',
    },
    {
      'name': 'userInfo',
      'baseName': 'userInfo',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return URL.attributeTypeMap;
  }
}
