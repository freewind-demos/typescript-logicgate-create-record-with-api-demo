import http from 'http';
import localVarRequest from 'request';
import {CurrentValue} from './CurrentValue';
import {PageOfCurrentValue} from './PageOfCurrentValue';
import {Authentication, VoidAuth} from './Authentication';
import {defaultBasePath} from './defaultBasePath';
import {ObjectSerializer} from './ObjectSerializer';

export enum CurrentValuesApiApiKeys {
}

export class CurrentValuesApi {
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

  public setApiKey(key: CurrentValuesApiApiKeys, value: string) {
    (this.authentications as any)[CurrentValuesApiApiKeys[key]].apiKey = value;
  }

  /**
   *
   * @summary Create a list of current values for a specified field.
   * @param currentValues currentValues
   * @param field field
   * @param {*} [options] Override http request options.
   */
  public createUsingPOST(currentValues: Array<CurrentValue>, field: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<CurrentValue>; }> {
    const localVarPath = this.basePath + '/api/v1/currentValues';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'currentValues' is not null or undefined
    if (currentValues === null || currentValues === undefined) {
      throw new Error('Required parameter currentValues was null or undefined when calling createUsingPOST.');
    }

    // verify required parameter 'field' is not null or undefined
    if (field === null || field === undefined) {
      throw new Error('Required parameter field was null or undefined when calling createUsingPOST.');
    }

    if (field !== undefined) {
      localVarQueryParameters['field'] = ObjectSerializer.serialize(field, 'string');
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
      body: ObjectSerializer.serialize(currentValues, 'Array<CurrentValue>'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<CurrentValue>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<CurrentValue>');
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
   * @summary Retrieve current values based on a field id.
   * @param id id
   * @param page Results page wanting to be retrieved
   * @param size The number of elements to be returned
   * @param query query
   * @param sort Sorting criteria in the format: object.property(,asc|desc)
   * @param {*} [options] Override http request options.
   */
  public findCurrentValuesByFieldUsingGET(id: string, page: string, size: string, query?: string, sort?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: CurrentValue; }> {
    const localVarPath = this.basePath + '/api/v1/currentValues/field/{id}'
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findCurrentValuesByFieldUsingGET.');
    }

    // verify required parameter 'page' is not null or undefined
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling findCurrentValuesByFieldUsingGET.');
    }

    // verify required parameter 'size' is not null or undefined
    if (size === null || size === undefined) {
      throw new Error('Required parameter size was null or undefined when calling findCurrentValuesByFieldUsingGET.');
    }

    if (page !== undefined) {
      localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (size !== undefined) {
      localVarQueryParameters['size'] = ObjectSerializer.serialize(size, 'string');
    }

    if (sort !== undefined) {
      localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, 'string');
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
    return new Promise<{ response: http.ClientResponse; body: CurrentValue; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'CurrentValue');
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
   * @summary Return a list of default current values based on a workflow.
   * @param workflow workflow
   * @param {*} [options] Override http request options.
   */
  public findDefaultsByWorkflowUsingGET(workflow: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<CurrentValue>; }> {
    const localVarPath = this.basePath + '/api/v1/currentValues';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'workflow' is not null or undefined
    if (workflow === null || workflow === undefined) {
      throw new Error('Required parameter workflow was null or undefined when calling findDefaultsByWorkflowUsingGET.');
    }

    if (workflow !== undefined) {
      localVarQueryParameters['workflow'] = ObjectSerializer.serialize(workflow, 'string');
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
    return new Promise<{ response: http.ClientResponse; body: Array<CurrentValue>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<CurrentValue>');
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
   * @summary Retrieve the user value options for a particular user field.
   * @param field field
   * @param page Results page wanting to be retrieved
   * @param query query
   * @param size The number of elements to be returned
   * @param sort Sorting criteria in the format: object.property(,asc|desc)
   * @param {*} [options] Override http request options.
   */
  public findUsersByFieldUsingGET(field: string, page: string, query: string, size: string, sort?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: PageOfCurrentValue; }> {
    const localVarPath = this.basePath + '/api/v1/currentValues/users';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'field' is not null or undefined
    if (field === null || field === undefined) {
      throw new Error('Required parameter field was null or undefined when calling findUsersByFieldUsingGET.');
    }

    // verify required parameter 'page' is not null or undefined
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling findUsersByFieldUsingGET.');
    }

    // verify required parameter 'query' is not null or undefined
    if (query === null || query === undefined) {
      throw new Error('Required parameter query was null or undefined when calling findUsersByFieldUsingGET.');
    }

    // verify required parameter 'size' is not null or undefined
    if (size === null || size === undefined) {
      throw new Error('Required parameter size was null or undefined when calling findUsersByFieldUsingGET.');
    }

    if (field !== undefined) {
      localVarQueryParameters['field'] = ObjectSerializer.serialize(field, 'string');
    }

    if (page !== undefined) {
      localVarQueryParameters['page'] = ObjectSerializer.serialize(page, 'string');
    }

    if (query !== undefined) {
      localVarQueryParameters['query'] = ObjectSerializer.serialize(query, 'string');
    }

    if (size !== undefined) {
      localVarQueryParameters['size'] = ObjectSerializer.serialize(size, 'string');
    }

    if (sort !== undefined) {
      localVarQueryParameters['sort'] = ObjectSerializer.serialize(sort, 'string');
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
    return new Promise<{ response: http.ClientResponse; body: PageOfCurrentValue; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'PageOfCurrentValue');
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
   * @summary Clear default status from any existing field default values and update the input current value list to default status. The saved default values are returned after.
   * @param currentValues currentValues
   * @param _default
   * @param field field
   * @param {*} [options] Override http request options.
   */
  public updateDefaultsUsingPATCH(currentValues: Array<CurrentValue>, _default: 'true', field: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<CurrentValue>; }> {
    const localVarPath = this.basePath + '/api/v1/currentValues';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'currentValues' is not null or undefined
    if (currentValues === null || currentValues === undefined) {
      throw new Error('Required parameter currentValues was null or undefined when calling updateDefaultsUsingPATCH.');
    }

    // verify required parameter '_default' is not null or undefined
    if (_default === null || _default === undefined) {
      throw new Error('Required parameter _default was null or undefined when calling updateDefaultsUsingPATCH.');
    }

    // verify required parameter 'field' is not null or undefined
    if (field === null || field === undefined) {
      throw new Error('Required parameter field was null or undefined when calling updateDefaultsUsingPATCH.');
    }

    if (_default !== undefined) {
      localVarQueryParameters['default'] = ObjectSerializer.serialize(_default, '\'true\'');
    }

    if (field !== undefined) {
      localVarQueryParameters['field'] = ObjectSerializer.serialize(field, 'string');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PATCH',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(currentValues, 'Array<CurrentValue>'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Array<CurrentValue>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<CurrentValue>');
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
