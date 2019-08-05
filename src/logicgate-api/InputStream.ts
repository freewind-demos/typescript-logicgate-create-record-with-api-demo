export class InputStream {

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [];

  static getAttributeTypeMap() {
    return InputStream.attributeTypeMap;
  }
}
