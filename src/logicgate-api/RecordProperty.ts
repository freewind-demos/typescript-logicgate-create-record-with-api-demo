export class RecordProperty {
  'fieldType'?: RecordProperty.FieldTypeEnum;
  'formattedValue'?: string;
  'header'?: string;
  'rawValue'?: any;
  'systemField'?: RecordProperty.SystemFieldEnum;
  'url'?: string;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'fieldType',
      'baseName': 'fieldType',
      'type': 'RecordProperty.FieldTypeEnum',
    },
    {
      'name': 'formattedValue',
      'baseName': 'formattedValue',
      'type': 'string',
    },
    {
      'name': 'header',
      'baseName': 'header',
      'type': 'string',
    },
    {
      'name': 'rawValue',
      'baseName': 'rawValue',
      'type': 'any',
    },
    {
      'name': 'systemField',
      'baseName': 'systemField',
      'type': 'RecordProperty.SystemFieldEnum',
    },
    {
      'name': 'url',
      'baseName': 'url',
      'type': 'string',
    }];

  static getAttributeTypeMap() {
    return RecordProperty.attributeTypeMap;
  }
}

export namespace RecordProperty {
  export enum FieldTypeEnum {
    TEXT = <any>'TEXT',
    TEXTAREA = <any>'TEXT_AREA',
    DATEPICKER = <any>'DATE_PICKER',
    NUMBER = <any>'NUMBER',
    ESIGNATURE = <any>'E_SIGNATURE',
    CHECKBOX = <any>'CHECKBOX',
    MULTISELECT = <any>'MULTI_SELECT',
    RADIO = <any>'RADIO',
    SELECT = <any>'SELECT',
    USER = <any>'USER',
    ATTACHMENT = <any>'ATTACHMENT',
    CALCULATION = <any>'CALCULATION',
    DUEDATE = <any>'DUE_DATE'
  }

  export enum SystemFieldEnum {
    NAME = <any>'NAME',
    STATUS = <any>'STATUS',
    CREATED = <any>'CREATED',
    USERDATE = <any>'USER_DATE',
    EFFECTIVEDUEDATE = <any>'EFFECTIVE_DUE_DATE',
    DUEDATE = <any>'DUE_DATE',
    ID = <any>'ID',
    USERNAME = <any>'USER_NAME',
    USERID = <any>'USER_ID',
    CREATORNAME = <any>'CREATOR_NAME',
    USERGROUP = <any>'USER_GROUP',
    STEPNAME = <any>'STEP_NAME',
    STEPID = <any>'STEP_ID',
    ORIGINNAME = <any>'ORIGIN_NAME',
    WORKFLOWNAME = <any>'WORKFLOW_NAME',
    WORKFLOWRECORDPREFIX = <any>'WORKFLOW_RECORD_PREFIX',
    WORKFLOWID = <any>'WORKFLOW_ID'
  }
}
