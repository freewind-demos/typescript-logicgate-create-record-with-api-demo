import http from 'http';
import localVarRequest from 'request';
import {Authentication, VoidAuth} from './Authentication';
import {defaultBasePath} from './defaultBasePath';
import {ValueMap} from './ValueMap';
import {ObjectSerializer} from './ObjectSerializer';

export enum ValueMapsApiApiKeys {
}

export class ValueMapsApi {
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

  public setApiKey(key: ValueMapsApiApiKeys, value: string) {
    (this.authentications as any)[ValueMapsApiApiKeys[key]].apiKey = value;
  }

  /**
   *
   * @summary Create a value map and associate it to a record.
   * @param currentValueMap currentValueMap
   * @param assignment assignment
   * @param record Assignment ID
   * @param {*} [options] Override http request options.
   */
  public createValueMapUsingPOST(currentValueMap: ValueMap, assignment?: string, record?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: ValueMap; }> {
    const localVarPath = this.basePath + '/api/v1/valueMaps';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'currentValueMap' is not null or undefined
    if (currentValueMap === null || currentValueMap === undefined) {
      throw new Error('Required parameter currentValueMap was null or undefined when calling createValueMapUsingPOST.');
    }

    if (assignment !== undefined) {
      localVarQueryParameters['assignment'] = ObjectSerializer.serialize(assignment, 'string');
    }

    if (record !== undefined) {
      localVarQueryParameters['record'] = ObjectSerializer.serialize(record, 'string');
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
      body: ObjectSerializer.serialize(currentValueMap, 'ValueMap'),
    };

    this.authentications.default.applyToRequest(localVarRequestOptions);

    if (Object.keys(localVarFormParams).length) {
      if (localVarUseFormData) {
        (<any>localVarRequestOptions).formData = localVarFormParams;
      } else {
        localVarRequestOptions.form = localVarFormParams;
      }
    }
    return new Promise<{ response: http.ClientResponse; body: ValueMap; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'ValueMap');
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
   * @summary Return a list of value maps that are greater than the minimum updated time.
   * @param minUpdated Minimum updated time value. The value is a unix timestamp.
   * @param {*} [options] Override http request options.
   */
  public getValueMapsByMinUpdatedUsingGET(minUpdated?: number, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<ValueMap>; }> {
    const localVarPath = this.basePath + '/api/v1/valueMaps';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    if (minUpdated !== undefined) {
      localVarQueryParameters['minUpdated'] = ObjectSerializer.serialize(minUpdated, 'number');
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
    return new Promise<{ response: http.ClientResponse; body: Array<ValueMap>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<ValueMap>');
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
