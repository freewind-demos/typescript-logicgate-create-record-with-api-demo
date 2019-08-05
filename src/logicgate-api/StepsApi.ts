import http from 'http';
import localVarRequest from 'request';
import {Step} from './Step';
import {Authentication, VoidAuth} from './Authentication';
import {defaultBasePath} from './defaultBasePath';
import {ObjectSerializer} from './ObjectSerializer';

export enum StepsApiApiKeys {
}

export class StepsApi {
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

  public setApiKey(key: StepsApiApiKeys, value: string) {
    (this.authentications as any)[StepsApiApiKeys[key]].apiKey = value;
  }

  /**
   *
   * @summary Return a list of all nodes that are active and attached to a workflow.
   * @param {*} [options] Override http request options.
   */
  public findAllUsingGET1(options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Step>; }> {
    const localVarPath = this.basePath + '/api/v1/nodes';
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
    return new Promise<{ response: http.ClientResponse; body: Array<Step>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Step>');
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
   * @summary Return a list of all nodes that are active and attached to a workflow.
   * @param {*} [options] Override http request options.
   */
  public findAllUsingGET2(options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Step>; }> {
    const localVarPath = this.basePath + '/api/v1/steps';
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
    return new Promise<{ response: http.ClientResponse; body: Array<Step>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Step>');
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
   * @summary Find a specific node.
   * @param id id
   * @param {*} [options] Override http request options.
   */
  public findByIdUsingGET1(id: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Step; }> {
    const localVarPath = this.basePath + '/api/v1/nodes/{id}'
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET1.');
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
    return new Promise<{ response: http.ClientResponse; body: Step; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Step');
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
   * @summary Find a specific node.
   * @param id id
   * @param {*} [options] Override http request options.
   */
  public findByIdUsingGET2(id: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Step; }> {
    const localVarPath = this.basePath + '/api/v1/steps/{id}'
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET2.');
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
    return new Promise<{ response: http.ClientResponse; body: Step; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Step');
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
