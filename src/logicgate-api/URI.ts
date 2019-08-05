export class URI {
  'absolute'?: boolean;
  'authority'?: string;
  'fragment'?: string;
  'host'?: string;
  'opaque'?: boolean;
  'path'?: string;
  'port'?: number;
  'query'?: string;
  'rawAuthority'?: string;
  'rawFragment'?: string;
  'rawPath'?: string;
  'rawQuery'?: string;
  'rawSchemeSpecificPart'?: string;
  'rawUserInfo'?: string;
  'scheme'?: string;
  'schemeSpecificPart'?: string;
  'userInfo'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'absolute',
      'baseName': 'absolute',
      'type': 'boolean',
    },
    {
      'name': 'authority',
      'baseName': 'authority',
      'type': 'string',
    },
    {
      'name': 'fragment',
      'baseName': 'fragment',
      'type': 'string',
    },
    {
      'name': 'host',
      'baseName': 'host',
      'type': 'string',
    },
    {
      'name': 'opaque',
      'baseName': 'opaque',
      'type': 'boolean',
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
      'name': 'query',
      'baseName': 'query',
      'type': 'string',
    },
    {
      'name': 'rawAuthority',
      'baseName': 'rawAuthority',
      'type': 'string',
    },
    {
      'name': 'rawFragment',
      'baseName': 'rawFragment',
      'type': 'string',
    },
    {
      'name': 'rawPath',
      'baseName': 'rawPath',
      'type': 'string',
    },
    {
      'name': 'rawQuery',
      'baseName': 'rawQuery',
      'type': 'string',
    },
    {
      'name': 'rawSchemeSpecificPart',
      'baseName': 'rawSchemeSpecificPart',
      'type': 'string',
    },
    {
      'name': 'rawUserInfo',
      'baseName': 'rawUserInfo',
      'type': 'string',
    },
    {
      'name': 'scheme',
      'baseName': 'scheme',
      'type': 'string',
    },
    {
      'name': 'schemeSpecificPart',
      'baseName': 'schemeSpecificPart',
      'type': 'string',
    },
    {
      'name': 'userInfo',
      'baseName': 'userInfo',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return URI.attributeTypeMap;
  }
}
