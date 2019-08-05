/**
 * An entity for managing top-level process data. A process represents the highest level of organization for other entities within the application.
 */
import {Workflow} from './Workflow';

export class Process {
  'active'?: boolean;
  /**
   * Icon color of the process.
   */
  'color'?: string;
  'copied'?: boolean;
  'created'?: Date;
  /**
   * Icon type of the process.
   */
  'icon'?: Process.IconEnum;
  'id'?: string;
  'imported'?: boolean;
  'labels'?: Array<string>;
  /**
   * Name of the process.
   */
  'name'?: string;
  'updated'?: Date;
  /**
   * Workflows associated to the process.
   */
  'workflows'?: Array<Workflow>;

  static discriminator: string | undefined = undefined;

  static attributeTypeMap: Array<{ name: string, baseName: string, type: string }> = [
    {
      'name': 'active',
      'baseName': 'active',
      'type': 'boolean',
    },
    {
      'name': 'color',
      'baseName': 'color',
      'type': 'string',
    },
    {
      'name': 'copied',
      'baseName': 'copied',
      'type': 'boolean',
    },
    {
      'name': 'created',
      'baseName': 'created',
      'type': 'Date',
    },
    {
      'name': 'icon',
      'baseName': 'icon',
      'type': 'Process.IconEnum',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'imported',
      'baseName': 'imported',
      'type': 'boolean',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'name',
      'baseName': 'name',
      'type': 'string',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    },
    {
      'name': 'workflows',
      'baseName': 'workflows',
      'type': 'Array<Workflow>',
    }];

  static getAttributeTypeMap() {
    return Process.attributeTypeMap;
  }
}

export namespace Process {
  export enum IconEnum {
    Bookmark = <any>'fa-bookmark',
    Bolt = <any>'fa-bolt',
    Bullhorn = <any>'fa-bullhorn',
    Certificate = <any>'fa-certificate',
    CheckSquareO = <any>'fa-check-square-o',
    Cloud = <any>'fa-cloud',
    Comments = <any>'fa-comments',
    Dollar = <any>'fa-dollar',
    ExclamationTriangle = <any>'fa-exclamation-triangle',
    FileTextO = <any>'fa-file-text-o',
    Folder = <any>'fa-folder',
    Gift = <any>'fa-gift',
    Globe = <any>'fa-globe',
    Heartbeat = <any>'fa-heartbeat',
    Leaf = <any>'fa-leaf',
    Legal = <any>'fa-legal',
    LifeRing = <any>'fa-life-ring',
    Medkit = <any>'fa-medkit',
    Money = <any>'fa-money',
    Percent = <any>'fa-percent',
    Rocket = <any>'fa-rocket',
    Signal = <any>'fa-signal',
    University = <any>'fa-university',
    UserCircle = <any>'fa-user-circle'
  }
}
