import http from 'http';
import {Authentication, VoidAuth} from './Authentication';
import {defaultBasePath} from './defaultBasePath';
import {WorkflowResult} from './WorkflowResult';
import {ObjectSerializer} from './ObjectSerializer';
import {Workflow} from './Workflow';
import localVarRequest = require('request');

export enum WorkflowsApiApiKeys {
}

export class WorkflowsApi {
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

  public setApiKey(key: WorkflowsApiApiKeys, value: string) {
    (this.authentications as any)[WorkflowsApiApiKeys[key]].apiKey = value;
  }

  /**
   * If the distinct parameter is passed as true, then this list will filter to distinct relative workflows.If the distinct parameter is omitted or passed as false, then relative workflows will be repeated if there are multiple paths to the relative.
   * @summary Identify all paths from a particular workflow to relative workflows.
   * @param workflow workflow
   * @param distinct distinct
   * @param {*} [options] Override http request options.
   */
  public findAllRelativesUsingGET(workflow: string, distinct?: boolean, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<WorkflowResult>; }> {
    const localVarPath = this.basePath + '/api/v1/workflows/relatives';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'workflow' is not null or undefined
    if (workflow === null || workflow === undefined) {
      throw new Error('Required parameter workflow was null or undefined when calling findAllRelativesUsingGET.');
    }

    if (distinct !== undefined) {
      localVarQueryParameters['distinct'] = ObjectSerializer.serialize(distinct, 'boolean');
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
    return new Promise<{ response: http.ClientResponse; body: Array<WorkflowResult>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<WorkflowResult>');
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
   * @summary Return a list of all workflows that are active throughout all processes.
   * @param {*} [options] Override http request options.
   */
  public findAllUsingGET4(options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Workflow>; }> {
    const localVarPath = this.basePath + '/api/v1/workflows';
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
    return new Promise<{ response: http.ClientResponse; body: Array<Workflow>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Workflow>');
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
   * @summary Find a specific workflow.
   * @param id id
   * @param {*} [options] Override http request options.
   */
  public findByIdUsingGET3(id: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Workflow; }> {
    const localVarPath = this.basePath + '/api/v1/workflows/{id}'
      .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'id' is not null or undefined
    if (id === null || id === undefined) {
      throw new Error('Required parameter id was null or undefined when calling findByIdUsingGET3.');
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
    return new Promise<{ response: http.ClientResponse; body: Workflow; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Workflow');
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
   * @summary Return a workflow that contains a specific node.
   * @param nodeId nodeId
   * @param {*} [options] Override http request options.
   */
  public findByNodeUsingGET(nodeId: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Workflow; }> {
    const localVarPath = this.basePath + '/api/v1/workflows/node/{nodeId}'
      .replace('{' + 'nodeId' + '}', encodeURIComponent(String(nodeId)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'nodeId' is not null or undefined
    if (nodeId === null || nodeId === undefined) {
      throw new Error('Required parameter nodeId was null or undefined when calling findByNodeUsingGET.');
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
    return new Promise<{ response: http.ClientResponse; body: Workflow; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Workflow');
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
   * @summary Return a list of all workflows that are active throughout all processes.
   * @param page Results page wanting to be retrieved
   * @param size The number of elements to be returned
   * @param query query
   * @param sort Sorting criteria in the format: object.property(,asc|desc)
   * @param {*} [options] Override http request options.
   */
  public findByQueryWithProcessUsingGET(page: string, size: string, query?: string, sort?: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Array<Workflow>; }> {
    const localVarPath = this.basePath + '/api/v1/workflows/process';
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'page' is not null or undefined
    if (page === null || page === undefined) {
      throw new Error('Required parameter page was null or undefined when calling findByQueryWithProcessUsingGET.');
    }

    // verify required parameter 'size' is not null or undefined
    if (size === null || size === undefined) {
      throw new Error('Required parameter size was null or undefined when calling findByQueryWithProcessUsingGET.');
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
    return new Promise<{ response: http.ClientResponse; body: Array<Workflow>; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Array<Workflow>');
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
   * @summary Return a workflow that contains a specific step.
   * @param stepId stepId
   * @param {*} [options] Override http request options.
   */
  public findByStepUsingGET(stepId: string, options: any = {}): Promise<{ response: http.ClientResponse; body: Workflow; }> {
    const localVarPath = this.basePath + '/api/v1/workflows/step/{stepId}'
      .replace('{' + 'stepId' + '}', encodeURIComponent(String(stepId)));
    const localVarQueryParameters: any = {};
    const localVarHeaderParams: any = (<any>Object).assign({}, this.defaultHeaders);
    const localVarFormParams: any = {};

    // verify required parameter 'stepId' is not null or undefined
    if (stepId === null || stepId === undefined) {
      throw new Error('Required parameter stepId was null or undefined when calling findByStepUsingGET.');
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
    return new Promise<{ response: http.ClientResponse; body: Workflow; }>((resolve, reject) => {
      localVarRequest(localVarRequestOptions, (error, response, body) => {
        if (error) {
          reject(error);
        } else {
          body = ObjectSerializer.deserialize(body, 'Workflow');
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
