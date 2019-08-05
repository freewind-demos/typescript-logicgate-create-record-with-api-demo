export class ModelFile {
  'absolute'?: boolean;
  'absoluteFile'?: any;
  'absolutePath'?: string;
  'canonicalFile'?: any;
  'canonicalPath'?: string;
  'directory'?: boolean;
  'executable'?: boolean;
  'file'?: boolean;
  'freeSpace'?: number;
  'hidden'?: boolean;
  'lastModified'?: number;
  'name'?: string;
  'parent'?: string;
  'parentFile'?: any;
  'path'?: string;
  'readable'?: boolean;
  'totalSpace'?: number;
  'usableSpace'?: number;
  'writable'?: boolean;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'absolute',
      'baseName': 'absolute',
      'type': 'boolean',
    },
    {
      'name': 'absoluteFile',
      'baseName': 'absoluteFile',
      'type': 'any',
    },
    {
      'name': 'absolutePath',
      'baseName': 'absolutePath',
      'type': 'string',
    },
    {
      'name': 'canonicalFile',
      'baseName': 'canonicalFile',
      'type': 'any',
    },
    {
      'name': 'canonicalPath',
      'baseName': 'canonicalPath',
      'type': 'string',
    },
    {
      'name': 'directory',
      'baseName': 'directory',
      'type': 'boolean',
    },
    {
      'name': 'executable',
      'baseName': 'executable',
      'type': 'boolean',
    },
    {
      'name': 'file',
      'baseName': 'file',
      'type': 'boolean',
    },
    {
      'name': 'freeSpace',
      'baseName': 'freeSpace',
      'type': 'number',
    },
    {
      'name': 'hidden',
      'baseName': 'hidden',
      'type': 'boolean',
    },
    {
      'name': 'lastModified',
      'baseName': 'lastModified',
      'type': 'number',
    },
    {
      'name': 'name',
      'baseName': 'name',
      'type': 'string',
    },
    {
      'name': 'parent',
      'baseName': 'parent',
      'type': 'string',
    },
    {
      'name': 'parentFile',
      'baseName': 'parentFile',
      'type': 'any',
    },
    {
      'name': 'path',
      'baseName': 'path',
      'type': 'string',
    },
    {
      'name': 'readable',
      'baseName': 'readable',
      'type': 'boolean',
    },
    {
      'name': 'totalSpace',
      'baseName': 'totalSpace',
      'type': 'number',
    },
    {
      'name': 'usableSpace',
      'baseName': 'usableSpace',
      'type': 'number',
    },
    {
      'name': 'writable',
      'baseName': 'writable',
      'type': 'boolean',
    }];

  static getAttributeTypeMap() {
    return ModelFile.attributeTypeMap;
  }
}
