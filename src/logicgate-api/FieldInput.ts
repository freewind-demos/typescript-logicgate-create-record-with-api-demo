import {Field} from './Field';
import {FieldInputResult} from './FieldInputResult';

/**
 * A relationship object managing how to use fields and their associated current value maps in an expression.
 */
export class FieldInput {
  'active'?: boolean;
  'created'?: Date;
  'fieldResult'?: FieldInputResult;
  'id'?: string;
  /**
   * Field input to be used in the parent field's expression
   */
  'input'?: Field;
  'inputId'?: string;
  'labels'?: Array<string>;
  /**
   * Parent field that will use the input field in the expression.
   */
  'parent'?: Field;
  /**
   * Determines the fields place within the expression.
   */
  'priority'?: number;
  'updated'?: Date;

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
      'name': 'fieldResult',
      'baseName': 'fieldResult',
      'type': 'FieldInputResult',
    },
    {
      'name': 'id',
      'baseName': 'id',
      'type': 'string',
    },
    {
      'name': 'input',
      'baseName': 'input',
      'type': 'Field',
    },
    {
      'name': 'inputId',
      'baseName': 'inputId',
      'type': 'string',
    },
    {
      'name': 'labels',
      'baseName': 'labels',
      'type': 'Array<string>',
    },
    {
      'name': 'parent',
      'baseName': 'parent',
      'type': 'Field',
    },
    {
      'name': 'priority',
      'baseName': 'priority',
      'type': 'number',
    },
    {
      'name': 'updated',
      'baseName': 'updated',
      'type': 'Date',
    }];

  static getAttributeTypeMap() {
    return FieldInput.attributeTypeMap;
  }
}
