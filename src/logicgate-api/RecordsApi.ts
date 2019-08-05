import http from 'http';
import localVarRequest from 'request';
import {Record} from './Record';
import {FilteredRecord} from './FilteredRecord';
import {Authentication, VoidAuth} from './Authentication';
import {defaultBasePath} from './defaultBasePath';
import {ObjectSerializer} from './ObjectSerializer';

export enum RecordsApiApiKeys {
}

export class RecordsApi {
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

  public setApiKey(key: RecordsApiApiKeys, value: string) {
    (this.authentications as any)[RecordsApiApiKeys[key]].apiKey = value;
  }

  /**
   * The child may already exist or it may need to be created.
   * @summary Add a child record relationship to the record represented by the path variable.
   * @param child child
   * @param record record
   * @param layout Layout ID
   * @param {*} [options] Override http request options.
   */
  public createChildUsingPOST(child: Record, record: string, layout?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: FilteredRecord; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}/child'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'child' is not null or undefined
    if (child === null || child === undefined) {
      throw new Error('Required parameter child was null or undefined when calling createChildUsingPOST.');
    }

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createChildUsingPOST.');
    }

    if (layout !== undefined) {
      localVarQueryParameters['layout'] = ObjectSerializer.serialize(layout, 'string');
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
      body: ObjectSerializer.serialize(child, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: FilteredRecord; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'FilteredRecord');
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
   * The child may already exist or it may need to be created.
   * @summary Add a child record relationship to the record represented by the path variable.
   * @param child child
   * @param record record
   * @param layout Layout ID
   * @param {*} [options] Override http request options.
   */
  public createChildUsingPOST1(child: Record, record: string, layout?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: FilteredRecord; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}/child'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'child' is not null or undefined
    if (child === null || child === undefined) {
      throw new Error('Required parameter child was null or undefined when calling createChildUsingPOST1.');
    }

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createChildUsingPOST1.');
    }

    if (layout !== undefined) {
      localVarQueryParameters['layout'] = ObjectSerializer.serialize(layout, 'string');
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
      body: ObjectSerializer.serialize(child, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: FilteredRecord; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'FilteredRecord');
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
   * The parent may already exist or it may need to be created.
   * @summary Add a parent record relationship to the record represented by the path variable.
   * @param parent parent
   * @param record record
   * @param layout Layout ID
   * @param {*} [options] Override http request options.
   */
  public createParentUsingPOST(parent: Record, record: string, layout?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: FilteredRecord; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}/parent'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'parent' is not null or undefined
    if (parent === null || parent === undefined) {
      throw new Error('Required parameter parent was null or undefined when calling createParentUsingPOST.');
    }

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createParentUsingPOST.');
    }

    if (layout !== undefined) {
      localVarQueryParameters['layout'] = ObjectSerializer.serialize(layout, 'string');
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
      body: ObjectSerializer.serialize(parent, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: FilteredRecord; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'FilteredRecord');
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
   * The parent may already exist or it may need to be created.
   * @summary Add a parent record relationship to the record represented by the path variable.
   * @param parent parent
   * @param record record
   * @param layout Layout ID
   * @param {*} [options] Override http request options.
   */
  public createParentUsingPOST1(parent: Record, record: string, layout?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: FilteredRecord; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}/parent'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'parent' is not null or undefined
    if (parent === null || parent === undefined) {
      throw new Error('Required parameter parent was null or undefined when calling createParentUsingPOST1.');
    }

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createParentUsingPOST1.');
    }

    if (layout !== undefined) {
      localVarQueryParameters['layout'] = ObjectSerializer.serialize(layout, 'string');
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
      body: ObjectSerializer.serialize(parent, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: FilteredRecord; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'FilteredRecord');
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
   * Public assignments must included value map(s). Returns the saved public record.
   * @summary Create a public record.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public createPublicUsingPOST(record: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/public';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createPublicUsingPOST.');
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
      body: ObjectSerializer.serialize(record, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Public assignments must included value map(s). Returns the saved public record.
   * @summary Create a public record.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public createPublicUsingPOST1(record: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/records/public';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createPublicUsingPOST1.');
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
      body: ObjectSerializer.serialize(record, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * The record has a status of IN_PROGRESS. The returned object is the newly created record.
   * @summary Create an record that is assigned to the creator.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public createRecordUsingPOST(record: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/assignments';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createRecordUsingPOST.');
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
      body: ObjectSerializer.serialize(record, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * The record has a status of IN_PROGRESS. The returned object is the newly created record.
   * @summary Create an record that is assigned to the creator.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public createRecordUsingPOST1(record: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/records';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling createRecordUsingPOST1.');
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
      body: ObjectSerializer.serialize(record, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * @summary Delete mapping between two assignments.
   * @param record record
   * @param map Assignment ID to delete mapping with
   * @param {*} [options] Override http request options.
   */
  public deleteMappingUsingDELETE(record: string, map?: string, options: any = {}): Promise<{ response: http.ClientResponse; body?: any; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling deleteMappingUsingDELETE.');
    }

    if (map !== undefined) {
      localVarQueryParameters['map'] = ObjectSerializer.serialize(map, 'string');
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
   * @summary Delete an record.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public deleteUsingDELETE2(record: string, options: any = {}): Promise<{ response: http.ClientResponse; body?: any; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling deleteUsingDELETE2.');
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
   * @summary Return children assignments that are greater than the minimum updated time.
   * @param hasChild
   * @param minUpdated Minimum updated time value. The value is a unix timestamp.
   * @param {*} [options] Override http request options.
   */
  public getRecordChildrenByLastUpdatedUsingGET1(hasChild: 'true', minUpdated?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Record>; }> {
    const localVarPath = this.basePath + '/api/v1/records';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'hasChild' is not null or undefined
    if (hasChild === null || hasChild === undefined) {
      throw new Error('Required parameter hasChild was null or undefined when calling getRecordChildrenByLastUpdatedUsingGET1.');
    }

    if (hasChild !== undefined) {
      localVarQueryParameters['hasChild'] = ObjectSerializer.serialize(hasChild, '\'true\'');
    }

    if (minUpdated !== undefined) {
      localVarQueryParameters['minUpdated'] = ObjectSerializer.serialize(minUpdated, 'string');
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
    return new Promise<{ response: http.ClientResponse; body: Array<Record>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Record>');
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
   * Assignment active date is updated to current time if the record is assigned to the principal user. This will transition the record's status from not started to in progress.
   * @summary Open and then return the record.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public getRecordUsingGET(record: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling getRecordUsingGET.');
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
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Assignment active date is updated to current time if the record is assigned to the principal user. This will transition the record's status from not started to in progress.
   * @summary Open and then return the record.
   * @param record record
   * @param {*} [options] Override http request options.
   */
  public getRecordUsingGET1(record: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling getRecordUsingGET1.');
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
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Text and numeric values are optional.
   * @summary Return an record based on a field.
   * @param field Field ID
   * @param numericValue Numeric value to be searched against
   * @param textValue Text value to be searched against
   * @param {*} [options] Override http request options.
   */
  public getRecordsForFieldAndCurrentValueUsingGET(field?: string, numericValue?: string, textValue?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Record>; }> {
    const localVarPath = this.basePath + '/api/v1/assignments';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    if (field !== undefined) {
      localVarQueryParameters['field'] = ObjectSerializer.serialize(field, 'string');
    }

    if (numericValue !== undefined) {
      localVarQueryParameters['numericValue'] = ObjectSerializer.serialize(numericValue, 'string');
    }

    if (textValue !== undefined) {
      localVarQueryParameters['textValue'] = ObjectSerializer.serialize(textValue, 'string');
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
    return new Promise<{ response: http.ClientResponse; body: Array<Record>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Record>');
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
   * Returns the saved record.
   * @summary Updates the record, redirects it to the appropriate node, and optionally assigns it to another user. Redirects don't trigger record validation.
   * @param record record
   * @param record2 record
   * @param redirect redirect
   * @param {*} [options] Override http request options.
   */
  public redirectRecordUsingPUT(record: string, record2: Record, redirect: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}/redirect/{redirect}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)))
      .replace('{' + 'redirect' + '}', encodeURIComponent(String(redirect)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling redirectRecordUsingPUT.');
    }

    // verify required parameter 'record2' is not null or undefined
    if (record2 === null || record2 === undefined) {
      throw new Error('Required parameter record2 was null or undefined when calling redirectRecordUsingPUT.');
    }

    // verify required parameter 'redirect' is not null or undefined
    if (redirect === null || redirect === undefined) {
      throw new Error('Required parameter redirect was null or undefined when calling redirectRecordUsingPUT.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(record2, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Returns the saved record.
   * @summary Updates the record, redirects it to the appropriate node, and optionally assigns it to another user. Redirects don't trigger record validation.
   * @param record record
   * @param record2 record
   * @param redirect redirect
   * @param {*} [options] Override http request options.
   */
  public redirectRecordUsingPUT1(record: string, record2: Record, redirect: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}/redirect/{redirect}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)))
      .replace('{' + 'redirect' + '}', encodeURIComponent(String(redirect)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling redirectRecordUsingPUT1.');
    }

    // verify required parameter 'record2' is not null or undefined
    if (record2 === null || record2 === undefined) {
      throw new Error('Required parameter record2 was null or undefined when calling redirectRecordUsingPUT1.');
    }

    // verify required parameter 'redirect' is not null or undefined
    if (redirect === null || redirect === undefined) {
      throw new Error('Required parameter redirect was null or undefined when calling redirectRecordUsingPUT1.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(record2, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Returns the saved record.
   * @summary Updates the record, progresses it to the appropriate node, and optionally assigns it to another user.
   * @param record record
   * @param record2 record
   * @param {*} [options] Override http request options.
   */
  public submitRecordUsingPUT(record: string, record2: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}/progress'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling submitRecordUsingPUT.');
    }

    // verify required parameter 'record2' is not null or undefined
    if (record2 === null || record2 === undefined) {
      throw new Error('Required parameter record2 was null or undefined when calling submitRecordUsingPUT.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(record2, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Returns the saved record.
   * @summary Updates the record, progresses it to the appropriate node, and optionally assigns it to another user.
   * @param record record
   * @param record2 record
   * @param {*} [options] Override http request options.
   */
  public submitRecordUsingPUT1(record: string, record2: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}/progress'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling submitRecordUsingPUT1.');
    }

    // verify required parameter 'record2' is not null or undefined
    if (record2 === null || record2 === undefined) {
      throw new Error('Required parameter record2 was null or undefined when calling submitRecordUsingPUT1.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(record2, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Returns the updated record.
   * @summary Updates the record, but does not progress it to the next node.
   * @param record record
   * @param record2 record
   * @param {*} [options] Override http request options.
   */
  public updateRecordUsingPUT(record: string, record2: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/assignments/{record}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling updateRecordUsingPUT.');
    }

    // verify required parameter 'record2' is not null or undefined
    if (record2 === null || record2 === undefined) {
      throw new Error('Required parameter record2 was null or undefined when calling updateRecordUsingPUT.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(record2, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
   * Returns the updated record.
   * @summary Updates the record, but does not progress it to the next node.
   * @param record record
   * @param record2 record
   * @param {*} [options] Override http request options.
   */
  public updateRecordUsingPUT1(record: string, record2: Record, options: any = {}): Promise<{ response: http.ClientResponse; body: Record; }> {
    const localVarPath = this.basePath + '/api/v1/records/{record}'
      .replace('{' + 'record' + '}', encodeURIComponent(String(record)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'record' is not null or undefined
    if (record === null || record === undefined) {
      throw new Error('Required parameter record was null or undefined when calling updateRecordUsingPUT1.');
    }

    // verify required parameter 'record2' is not null or undefined
    if (record2 === null || record2 === undefined) {
      throw new Error('Required parameter record2 was null or undefined when calling updateRecordUsingPUT1.');
    }

    (<any>Object).assign(localVarHeaderParams, options.headers);

    const localVarUseFormData = false;

    const localVarRequestOptions: localVarRequest.Options = {
      method: 'PUT',
      qs: localVarQueryParameters,
      headers: localVarHeaderParams,
      uri: localVarPath,
      useQuerystring: this._useQuerystring,
      json: true,
      body: ObjectSerializer.serialize(record2, 'Record'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: Record; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Record');
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
