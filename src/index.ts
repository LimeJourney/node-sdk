// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  Entities,
  EntityCreateParams,
  EntityCreateResponse,
  EntityData,
  EntityListResponse,
  EntityRetrieveResponse,
  EntityWithSegments,
  EntityWithSegmentsArray,
} from './resources/entities/entities';
import {
  EventCreateParams,
  EventCreateResponse,
  EventData,
  EventDataArray,
  EventListParams,
  EventListResponse,
  Events,
  StringArray,
} from './resources/events/events';

export interface ClientOptions {
  apiKey: string;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['LIMEJOURNEY_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Limejourney API.
 */
export class Limejourney extends Core.APIClient {
  apiKey: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Limejourney API.
   *
   * @param {string} opts.apiKey
   * @param {string} [opts.baseURL=process.env['LIMEJOURNEY_BASE_URL'] ?? /] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({ baseURL = Core.readEnv('LIMEJOURNEY_BASE_URL'), apiKey, ...opts }: ClientOptions) {
    if (apiKey === undefined) {
      throw new Errors.LimejourneyError(
        "Missing required client option apiKey; you need to instantiate the Limejourney client with an apiKey option, like new Limejourney({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions = {
      apiKey,
      ...opts,
      baseURL: baseURL || `/`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.apiKey = apiKey;
  }

  events: API.Events = new API.Events(this);
  entities: API.Entities = new API.Entities(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  static Limejourney = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static LimejourneyError = Errors.LimejourneyError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

export {
  LimejourneyError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export import toFile = Uploads.toFile;
export import fileFromPath = Uploads.fileFromPath;

Limejourney.Events = Events;
Limejourney.Entities = Entities;

export declare namespace Limejourney {
  export type RequestOptions = Core.RequestOptions;

  export {
    Events as Events,
    type EventData as EventData,
    type EventDataArray as EventDataArray,
    type StringArray as StringArray,
    type EventCreateResponse as EventCreateResponse,
    type EventListResponse as EventListResponse,
    type EventCreateParams as EventCreateParams,
    type EventListParams as EventListParams,
  };

  export {
    Entities as Entities,
    type EntityData as EntityData,
    type EntityWithSegments as EntityWithSegments,
    type EntityWithSegmentsArray as EntityWithSegmentsArray,
    type EntityCreateResponse as EntityCreateResponse,
    type EntityRetrieveResponse as EntityRetrieveResponse,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
  };
}

export default Limejourney;
