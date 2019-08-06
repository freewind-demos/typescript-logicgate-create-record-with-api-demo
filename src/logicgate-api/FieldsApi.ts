import http from 'http';
import localVarRequest from 'request';
import {Field} from './Field';
import {PageOfField} from './PageOfField';
import {Authentication, VoidAuth} from './Authentication';
import {defaultBasePath} from './defaultBasePath';
import {ObjectSerializer} from './ObjectSerializer';

export enum FieldsApiApiKeys {
}

export class FieldsApi {
  protected _basePath = defaultBasePath;
  protected defaultHeaders: any = {};
  protected _useQuerystring: boolean = false;

  protected authentications = {
    'default': <Authentication>new VoidAuth(),
  };

  constructor(basePath?: string);
  constructor(basePathOrUsername: string, password?: string, basePath?: string) {
    if (password) {
      if (basePath) {
        this.basePath = basePath;
      }
    } else {
      if (basePathOrUsername) {
        this.basePath = basePathOrUsername;
      }
    }
  }

  set useQuerystring(value: boolean) {
    this._useQuerystring = value;
  }

  set basePath(basePath: string) {
    this._basePath = basePath;
  }

  get basePath() {
    return this._basePath;
  }

  public setDefaultAuthentication(auth: Authentication) {
    this.authentications.default = auth;
  }

  public setApiKey(key: FieldsApiApiKeys, value: string) {
    (this.authentications as any)[FieldsApiApiKeys[key]].apiKey = value;
  }

  /**
   *
   * @summary Create a field.
   * @param field field
   * @param {*} [options] Override http request options.
   */
  public createUsingPOST2(field: Field, options: any = {}): Promise<{ response: http.ClientResponse; body: Field; }> {
    const localVarPath = this.basePath + '/api/v1/fields';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'field' is not null or undefined
    if (field === null || field === undefined) {
      throw new Error('Required parameter field was null or undefined when calling createUsingPOST2.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'POST',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(field, 'Field'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Field; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Field');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Delete a field.
   * @param id id
   * @param {*} [options] Override http request options.
   */
  public deleteUsingDELETE(id: string, options: any = {}): Promise<{ response: http.ClientResponse; body?: any; }> {
    const localVarPath = this.basePath + '/api/v1/fields/{id}'
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling deleteUsingDELETE.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'DELETE',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body?: any; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Returns whether a field is a field input to a calculation field.
   * @param fieldId fieldId
   * @param {*} [options] Override http request options.
   */
  public fieldIsInputUsingGET(fieldId: string, options: any = {}): Promise<{ response: http.ClientResponse; body: boolean; }> {
    const localVarPath = this.basePath + '/api/v1/fields/isInput/{fieldId}'
      .replace('{' + 'fieldId' + '}', encodeURIComponent(String(fieldId)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'fieldId' is not null or undefined
    if (fieldId === null || fieldId === undefined) {
      throw new Error('Required parameter fieldId was null or undefined when calling fieldIsInputUsingGET.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: boolean; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'boolean');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a paginated list of all discrete fields along with their current values.
   * @param page Results page wanting to be retrieved
   * @param size The number of elements to be returned
   * @param archived
   * @param exclude
   * @param global
   * @param id
   * @param ids
   * @param nodeId
   * @param processId
   * @param query
   * @param sectionId
   * @param sort Sorting criteria in the format: object.property(,asc|desc)
   * @param stepId
   * @param types
   * @param withInputs
   * @param withLabels
   * @param withValues
   * @param workflowId
   * @param {*} [options] Override http request options.
   */
  public findByDiscreteWithValuesUsingGET(page: string, size: string, archived?: boolean, exclude?: boolean, global?: boolean, id?: string, ids?: Array<string>, nodeId?: string, processId?: string, query?: string, sectionId?: string, sort?: string, stepId?: string, types?: Array<'TEXT' | 'TEXT_AREA' | 'DATE_PICKER' | 'NUMBER' | 'E_SIGNATURE' | 'CHECKBOX' | 'MULTI_SELECT' | 'RADIO' | 'SELECT' | 'USER' | 'ATTACHMENT' | 'CALCULATION' | 'DUE_DATE'>, withInputs?: boolean, withLabels?: boolean, withValues?: boolean, workflowId?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: PageOfField; }> {
    const localVarPath = this.basePath + '/api/v1/fields/discrete/values';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'page' is not null or undefined
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling findByDiscreteWithValuesUsingGET.');
    }

    // verify required parameter 'size' is not null or undefined
    if (size === null || size === undefined) {
      throw new Error('Required parameter size was null or undefined when calling findByDiscreteWithValuesUsingGET.');
    }

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    if (exclude !== undefined) {
      localVarQueryParameters['exclude'] = ObjectSerializer.serialize(exclude, 'boolean');
    }

    if (global !== undefined) {
      localVarQueryParameters['global'] = ObjectSerializer.serialize(global, 'boolean');
    }

    if (id !== undefined) {
      localVarQueryParameters['id'] = ObjectSerializer.serialize(id, 'string');
    }

    if (ids !== undefined) {
      localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'Array<string>');
    }

    if (nodeId !== undefined) {
      localVarQueryParameters['nodeId'] = ObjectSerializer.serialize(nodeId, 'string');
    }

    if (page !== undefined) {
      localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'string');
    }

    if (processId !== undefined) {
      localVarQueryParameters['processId'] = ObjectSerializer.serialize(processId, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (sectionId !== undefined) {
      localVarQueryParameters['sectionId'] = ObjectSerializer.serialize(sectionId, 'string');
    }

    if (size !== undefined) {
      localVarQueryParameters['size'] = ObjectSerializer.serialize(size, 'string');
    }

    if (sort !== undefined) {
      localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, 'string');
    }

    if (stepId !== undefined) {
      localVarQueryParameters['stepId'] = ObjectSerializer.serialize(stepId, 'string');
    }

    if (types !== undefined) {
      localVarQueryParameters['types'] = ObjectSerializer.serialize(types, 'Array<\'TEXT\' | \'TEXT_AREA\' | \'DATE_PICKER\' | \'NUMBER\' | \'E_SIGNATURE\' | \'CHECKBOX\' | \'MULTI_SELECT\' | \'RADIO\' | \'SELECT\' | \'USER\' | \'ATTACHMENT\' | \'CALCULATION\' | \'DUE_DATE\'>');
    }

    if (withInputs !== undefined) {
      localVarQueryParameters['withInputs'] = ObjectSerializer.serialize(withInputs, 'boolean');
    }

    if (withLabels !== undefined) {
      localVarQueryParameters['withLabels'] = ObjectSerializer.serialize(withLabels, 'boolean');
    }

    if (withValues !== undefined) {
      localVarQueryParameters['withValues'] = ObjectSerializer.serialize(withValues, 'boolean');
    }

    if (workflowId !== undefined) {
      localVarQueryParameters['workflowId'] = ObjectSerializer.serialize(workflowId, 'string');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: PageOfField; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'PageOfField');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a paginated list of global fields.
   * @param page Results page wanting to be retrieved
   * @param size The number of elements to be returned
   * @param archived
   * @param exclude
   * @param global
   * @param id
   * @param ids
   * @param nodeId
   * @param processId
   * @param query
   * @param sectionId
   * @param sort Sorting criteria in the format: object.property(,asc|desc)
   * @param stepId
   * @param types
   * @param withInputs
   * @param withLabels
   * @param withValues
   * @param workflowId
   * @param {*} [options] Override http request options.
   */
  public findByGlobalUsingGET(page: string, size: string, archived?: boolean, exclude?: boolean, global?: boolean, id?: string, ids?: Array<string>, nodeId?: string, processId?: string, query?: string, sectionId?: string, sort?: string, stepId?: string, types?: Array<'TEXT' | 'TEXT_AREA' | 'DATE_PICKER' | 'NUMBER' | 'E_SIGNATURE' | 'CHECKBOX' | 'MULTI_SELECT' | 'RADIO' | 'SELECT' | 'USER' | 'ATTACHMENT' | 'CALCULATION' | 'DUE_DATE'>, withInputs?: boolean, withLabels?: boolean, withValues?: boolean, workflowId?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: PageOfField; }> {
    const localVarPath = this.basePath + '/api/v1/fields/global';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'page' is not null or undefined
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling findByGlobalUsingGET.');
    }

    // verify required parameter 'size' is not null or undefined
    if (size === null || size === undefined) {
      throw new Error('Required parameter size was null or undefined when calling findByGlobalUsingGET.');
    }

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    if (exclude !== undefined) {
      localVarQueryParameters['exclude'] = ObjectSerializer.serialize(exclude, 'boolean');
    }

    if (global !== undefined) {
      localVarQueryParameters['global'] = ObjectSerializer.serialize(global, 'boolean');
    }

    if (id !== undefined) {
      localVarQueryParameters['id'] = ObjectSerializer.serialize(id, 'string');
    }

    if (ids !== undefined) {
      localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'Array<string>');
    }

    if (nodeId !== undefined) {
      localVarQueryParameters['nodeId'] = ObjectSerializer.serialize(nodeId, 'string');
    }

    if (page !== undefined) {
      localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'string');
    }

    if (processId !== undefined) {
      localVarQueryParameters['processId'] = ObjectSerializer.serialize(processId, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (sectionId !== undefined) {
      localVarQueryParameters['sectionId'] = ObjectSerializer.serialize(sectionId, 'string');
    }

    if (size !== undefined) {
      localVarQueryParameters['size'] = ObjectSerializer.serialize(size, 'string');
    }

    if (sort !== undefined) {
      localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, 'string');
    }

    if (stepId !== undefined) {
      localVarQueryParameters['stepId'] = ObjectSerializer.serialize(stepId, 'string');
    }

    if (types !== undefined) {
      localVarQueryParameters['types'] = ObjectSerializer.serialize(types, 'Array<\'TEXT\' | \'TEXT_AREA\' | \'DATE_PICKER\' | \'NUMBER\' | \'E_SIGNATURE\' | \'CHECKBOX\' | \'MULTI_SELECT\' | \'RADIO\' | \'SELECT\' | \'USER\' | \'ATTACHMENT\' | \'CALCULATION\' | \'DUE_DATE\'>');
    }

    if (withInputs !== undefined) {
      localVarQueryParameters['withInputs'] = ObjectSerializer.serialize(withInputs, 'boolean');
    }

    if (withLabels !== undefined) {
      localVarQueryParameters['withLabels'] = ObjectSerializer.serialize(withLabels, 'boolean');
    }

    if (withValues !== undefined) {
      localVarQueryParameters['withValues'] = ObjectSerializer.serialize(withValues, 'boolean');
    }

    if (workflowId !== undefined) {
      localVarQueryParameters['workflowId'] = ObjectSerializer.serialize(workflowId, 'string');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: PageOfField; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'PageOfField');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Find a specific field.
   * @param id id
   * @param archived Retrieve archived values
   * @param {*} [options] Override http request options.
   */
  public findByIdUsingGET(id: string, archived?: boolean, options: any = {}): Promise<{ response: http.ClientResponse; body: Field; }> {
    const localVarPath = this.basePath + '/api/v1/fields/{id}'
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET.');
    }

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Field; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Field');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a paginated list of fields from a particular workflow.
   * @param page
   * @param workflowId
   * @param archived
   * @param exclude
   * @param global
   * @param id
   * @param ids
   * @param nodeId
   * @param processId
   * @param query
   * @param sectionId
   * @param stepId
   * @param types
   * @param withInputs
   * @param withLabels
   * @param withValues
   * @param {*} [options] Override http request options.
   */
  public findByWorkflowUsingGET(page: string, workflowId: string, archived?: boolean, exclude?: boolean, global?: boolean, id?: string, ids?: Array<string>, nodeId?: string, processId?: string, query?: string, sectionId?: string, stepId?: string, types?: Array<'TEXT' | 'TEXT_AREA' | 'DATE_PICKER' | 'NUMBER' | 'E_SIGNATURE' | 'CHECKBOX' | 'MULTI_SELECT' | 'RADIO' | 'SELECT' | 'USER' | 'ATTACHMENT' | 'CALCULATION' | 'DUE_DATE'>, withInputs?: boolean, withLabels?: boolean, withValues?: boolean, options: any = {}): Promise<{ response: http.ClientResponse; body: PageOfField; }> {
    const localVarPath = this.basePath + '/api/v1/fields/workflow/{workflowId}'
      .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'page' is not null or undefined
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling findByWorkflowUsingGET.');
    }

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new Error('Required parameter workflowId was null or undefined when calling findByWorkflowUsingGET.');
    }

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    if (exclude !== undefined) {
      localVarQueryParameters['exclude'] = ObjectSerializer.serialize(exclude, 'boolean');
    }

    if (global !== undefined) {
      localVarQueryParameters['global'] = ObjectSerializer.serialize(global, 'boolean');
    }

    if (id !== undefined) {
      localVarQueryParameters['id'] = ObjectSerializer.serialize(id, 'string');
    }

    if (ids !== undefined) {
      localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'Array<string>');
    }

    if (nodeId !== undefined) {
      localVarQueryParameters['nodeId'] = ObjectSerializer.serialize(nodeId, 'string');
    }

    if (page !== undefined) {
      localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'string');
    }

    if (processId !== undefined) {
      localVarQueryParameters['processId'] = ObjectSerializer.serialize(processId, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (sectionId !== undefined) {
      localVarQueryParameters['sectionId'] = ObjectSerializer.serialize(sectionId, 'string');
    }

    if (stepId !== undefined) {
      localVarQueryParameters['stepId'] = ObjectSerializer.serialize(stepId, 'string');
    }

    if (types !== undefined) {
      localVarQueryParameters['types'] = ObjectSerializer.serialize(types, 'Array<\'TEXT\' | \'TEXT_AREA\' | \'DATE_PICKER\' | \'NUMBER\' | \'E_SIGNATURE\' | \'CHECKBOX\' | \'MULTI_SELECT\' | \'RADIO\' | \'SELECT\' | \'USER\' | \'ATTACHMENT\' | \'CALCULATION\' | \'DUE_DATE\'>');
    }

    if (withInputs !== undefined) {
      localVarQueryParameters['withInputs'] = ObjectSerializer.serialize(withInputs, 'boolean');
    }

    if (withLabels !== undefined) {
      localVarQueryParameters['withLabels'] = ObjectSerializer.serialize(withLabels, 'boolean');
    }

    if (withValues !== undefined) {
      localVarQueryParameters['withValues'] = ObjectSerializer.serialize(withValues, 'boolean');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: PageOfField; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'PageOfField');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a list of fields from a particular a workflow.
   * @param workflowId
   * @param archived Return archived values.
   * @param exclude
   * @param global
   * @param id
   * @param ids
   * @param nodeId
   * @param processId
   * @param query
   * @param sectionId
   * @param stepId
   * @param types
   * @param withInputs
   * @param withLabels
   * @param withValues
   * @param {*} [options] Override http request options.
   */
  public findByWorkflowWithValuesUsingGET(workflowId: string, archived?: boolean, exclude?: boolean, global?: boolean, id?: string, ids?: Array<string>, nodeId?: string, processId?: string, query?: string, sectionId?: string, stepId?: string, types?: Array<'TEXT' | 'TEXT_AREA' | 'DATE_PICKER' | 'NUMBER' | 'E_SIGNATURE' | 'CHECKBOX' | 'MULTI_SELECT' | 'RADIO' | 'SELECT' | 'USER' | 'ATTACHMENT' | 'CALCULATION' | 'DUE_DATE'>, withInputs?: boolean, withLabels?: boolean, withValues?: boolean, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Field>; }> {
    const localVarPath = this.basePath + '/api/v1/fields/workflow/{workflowId}/values'
      .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new Error('Required parameter workflowId was null or undefined when calling findByWorkflowWithValuesUsingGET.');
    }

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    if (exclude !== undefined) {
      localVarQueryParameters['exclude'] = ObjectSerializer.serialize(exclude, 'boolean');
    }

    if (global !== undefined) {
      localVarQueryParameters['global'] = ObjectSerializer.serialize(global, 'boolean');
    }

    if (id !== undefined) {
      localVarQueryParameters['id'] = ObjectSerializer.serialize(id, 'string');
    }

    if (ids !== undefined) {
      localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'Array<string>');
    }

    if (nodeId !== undefined) {
      localVarQueryParameters['nodeId'] = ObjectSerializer.serialize(nodeId, 'string');
    }

    if (processId !== undefined) {
      localVarQueryParameters['processId'] = ObjectSerializer.serialize(processId, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (sectionId !== undefined) {
      localVarQueryParameters['sectionId'] = ObjectSerializer.serialize(sectionId, 'string');
    }

    if (stepId !== undefined) {
      localVarQueryParameters['stepId'] = ObjectSerializer.serialize(stepId, 'string');
    }

    if (types !== undefined) {
      localVarQueryParameters['types'] = ObjectSerializer.serialize(types, 'Array<\'TEXT\' | \'TEXT_AREA\' | \'DATE_PICKER\' | \'NUMBER\' | \'E_SIGNATURE\' | \'CHECKBOX\' | \'MULTI_SELECT\' | \'RADIO\' | \'SELECT\' | \'USER\' | \'ATTACHMENT\' | \'CALCULATION\' | \'DUE_DATE\'>');
    }

    if (withInputs !== undefined) {
      localVarQueryParameters['withInputs'] = ObjectSerializer.serialize(withInputs, 'boolean');
    }

    if (withLabels !== undefined) {
      localVarQueryParameters['withLabels'] = ObjectSerializer.serialize(withLabels, 'boolean');
    }

    if (withValues !== undefined) {
      localVarQueryParameters['withValues'] = ObjectSerializer.serialize(withValues, 'boolean');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<Field>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Field>');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a list of all nested fields.
   * @param archived
   * @param exclude
   * @param global
   * @param id
   * @param ids
   * @param nodeId
   * @param processId
   * @param query
   * @param sectionId
   * @param stepId
   * @param types
   * @param withInputs
   * @param withLabels
   * @param withValues
   * @param workflowId
   * @param {*} [options] Override http request options.
   */
  public findInputFieldsByRequestUsingGET(archived?: boolean, exclude?: boolean, global?: boolean, id?: string, ids?: Array<string>, nodeId?: string, processId?: string, query?: string, sectionId?: string, stepId?: string, types?: Array<'TEXT' | 'TEXT_AREA' | 'DATE_PICKER' | 'NUMBER' | 'E_SIGNATURE' | 'CHECKBOX' | 'MULTI_SELECT' | 'RADIO' | 'SELECT' | 'USER' | 'ATTACHMENT' | 'CALCULATION' | 'DUE_DATE'>, withInputs?: boolean, withLabels?: boolean, withValues?: boolean, workflowId?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Field; }> {
    const localVarPath = this.basePath + '/api/v1/fields/nested';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    if (exclude !== undefined) {
      localVarQueryParameters['exclude'] = ObjectSerializer.serialize(exclude, 'boolean');
    }

    if (global !== undefined) {
      localVarQueryParameters['global'] = ObjectSerializer.serialize(global, 'boolean');
    }

    if (id !== undefined) {
      localVarQueryParameters['id'] = ObjectSerializer.serialize(id, 'string');
    }

    if (ids !== undefined) {
      localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'Array<string>');
    }

    if (nodeId !== undefined) {
      localVarQueryParameters['nodeId'] = ObjectSerializer.serialize(nodeId, 'string');
    }

    if (processId !== undefined) {
      localVarQueryParameters['processId'] = ObjectSerializer.serialize(processId, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (sectionId !== undefined) {
      localVarQueryParameters['sectionId'] = ObjectSerializer.serialize(sectionId, 'string');
    }

    if (stepId !== undefined) {
      localVarQueryParameters['stepId'] = ObjectSerializer.serialize(stepId, 'string');
    }

    if (types !== undefined) {
      localVarQueryParameters['types'] = ObjectSerializer.serialize(types, 'Array<\'TEXT\' | \'TEXT_AREA\' | \'DATE_PICKER\' | \'NUMBER\' | \'E_SIGNATURE\' | \'CHECKBOX\' | \'MULTI_SELECT\' | \'RADIO\' | \'SELECT\' | \'USER\' | \'ATTACHMENT\' | \'CALCULATION\' | \'DUE_DATE\'>');
    }

    if (withInputs !== undefined) {
      localVarQueryParameters['withInputs'] = ObjectSerializer.serialize(withInputs, 'boolean');
    }

    if (withLabels !== undefined) {
      localVarQueryParameters['withLabels'] = ObjectSerializer.serialize(withLabels, 'boolean');
    }

    if (withValues !== undefined) {
      localVarQueryParameters['withValues'] = ObjectSerializer.serialize(withValues, 'boolean');
    }

    if (workflowId !== undefined) {
      localVarQueryParameters['workflowId'] = ObjectSerializer.serialize(workflowId, 'string');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Field; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Field');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a paginated list of user fields based on a workflow and global user fields.
   * @param workflowId
   * @param archived
   * @param exclude
   * @param global
   * @param id
   * @param ids
   * @param nodeId
   * @param processId
   * @param query
   * @param sectionId
   * @param stepId
   * @param types
   * @param withInputs
   * @param withLabels
   * @param withValues
   * @param {*} [options] Override http request options.
   */
  public findUserFieldsByWorkflowOrGlobalUsingGET(workflowId: string, archived?: boolean, exclude?: boolean, global?: boolean, id?: string, ids?: Array<string>, nodeId?: string, processId?: string, query?: string, sectionId?: string, stepId?: string, types?: Array<'TEXT' | 'TEXT_AREA' | 'DATE_PICKER' | 'NUMBER' | 'E_SIGNATURE' | 'CHECKBOX' | 'MULTI_SELECT' | 'RADIO' | 'SELECT' | 'USER' | 'ATTACHMENT' | 'CALCULATION' | 'DUE_DATE'>, withInputs?: boolean, withLabels?: boolean, withValues?: boolean, options: any = {}): Promise<{ response: http.ClientResponse; body: PageOfField; }> {
    const localVarPath = this.basePath + '/api/v1/fields/workflow/{workflowId}/users'
      .replace('{' + 'workflowId' + '}', encodeURIComponent(String(workflowId)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'workflowId' is not null or undefined
    if (workflowId === null || workflowId === undefined) {
      throw new Error('Required parameter workflowId was null or undefined when calling findUserFieldsByWorkflowOrGlobalUsingGET.');
    }

    if (archived !== undefined) {
      localVarQueryParameters['archived'] = ObjectSerializer.serialize(archived, 'boolean');
    }

    if (exclude !== undefined) {
      localVarQueryParameters['exclude'] = ObjectSerializer.serialize(exclude, 'boolean');
    }

    if (global !== undefined) {
      localVarQueryParameters['global'] = ObjectSerializer.serialize(global, 'boolean');
    }

    if (id !== undefined) {
      localVarQueryParameters['id'] = ObjectSerializer.serialize(id, 'string');
    }

    if (ids !== undefined) {
      localVarQueryParameters['ids'] = ObjectSerializer.serialize(ids, 'Array<string>');
    }

    if (nodeId !== undefined) {
      localVarQueryParameters['nodeId'] = ObjectSerializer.serialize(nodeId, 'string');
    }

    if (processId !== undefined) {
      localVarQueryParameters['processId'] = ObjectSerializer.serialize(processId, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (sectionId !== undefined) {
      localVarQueryParameters['sectionId'] = ObjectSerializer.serialize(sectionId, 'string');
    }

    if (stepId !== undefined) {
      localVarQueryParameters['stepId'] = ObjectSerializer.serialize(stepId, 'string');
    }

    if (types !== undefined) {
      localVarQueryParameters['types'] = ObjectSerializer.serialize(types, 'Array<\'TEXT\' | \'TEXT_AREA\' | \'DATE_PICKER\' | \'NUMBER\' | \'E_SIGNATURE\' | \'CHECKBOX\' | \'MULTI_SELECT\' | \'RADIO\' | \'SELECT\' | \'USER\' | \'ATTACHMENT\' | \'CALCULATION\' | \'DUE_DATE\'>');
    }

    if (withInputs !== undefined) {
      localVarQueryParameters['withInputs'] = ObjectSerializer.serialize(withInputs, 'boolean');
    }

    if (withLabels !== undefined) {
      localVarQueryParameters['withLabels'] = ObjectSerializer.serialize(withLabels, 'boolean');
    }

    if (withValues !== undefined) {
      localVarQueryParameters['withValues'] = ObjectSerializer.serialize(withValues, 'boolean');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: PageOfField; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'PageOfField');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }

  /**
   *
   * @summary Return a list of all field types.
   * @param {*} [options] Override http request options.
   */
  public listFieldTypesUsingGET(options: any = {}): Promise<{ response: http.ClientResponse; body: Array<string>; }> {
    const localVarPath = this.basePath + '/api/v1/fields/types';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'GET',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<string>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<string>');
          if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
            resolve({response: response, body: body});
          } else {
            reject({response: response, body: body});
          }
        }
      });
    });
  }
}
