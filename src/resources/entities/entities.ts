// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EventsAPI from './events';
import { EventListResponse, Events } from './events';

export class Entities extends APIResource {
  events: EventsAPI.Events = new EventsAPI.Events(this._client);

  create(body: EntityCreateParams, options?: Core.RequestOptions): Core.APIPromise<EntityCreateResponse> {
    return this._client.post('/entities', { body, ...options });
  }

  retrieve(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EntityRetrieveResponse> {
    return this._client.get(`/entities/${entityId}`, options);
  }

  list(options?: Core.RequestOptions): Core.APIPromise<EntityListResponse> {
    return this._client.get('/entities', options);
  }
}

export interface EntityData {
  data: EntityData.Data | null;

  status: 'success' | 'error';

  message?: string;
}

export namespace EntityData {
  export interface Data {
    id: string;

    created_at: string;

    org_id: string;

    /**
     * Construct a type with a set of properties K of type T
     */
    properties: Record<string, unknown>;

    updated_at: string;

    external_id?: string;
  }
}

export interface EntityWithSegments {
  data: EntityWithSegments.Data | null;

  status: 'success' | 'error';

  message?: string;
}

export namespace EntityWithSegments {
  export interface Data {
    id: string;

    created_at: string;

    org_id: string;

    /**
     * Construct a type with a set of properties K of type T
     */
    properties: Record<string, unknown>;

    segments: Array<Data.Segment>;

    updated_at: string;

    external_id?: string;
  }

  export namespace Data {
    export interface Segment {
      id: string;

      createdAt: string;

      description: string;

      name: string;
    }
  }
}

export interface EntityWithSegmentsArray {
  data: Array<EntityWithSegmentsArray.Data> | null;

  status: 'success' | 'error';

  message?: string;
}

export namespace EntityWithSegmentsArray {
  export interface Data {
    id: string;

    created_at: string;

    org_id: string;

    /**
     * Construct a type with a set of properties K of type T
     */
    properties: Record<string, unknown>;

    segments: Array<Data.Segment>;

    updated_at: string;

    external_id?: string;
  }

  export namespace Data {
    export interface Segment {
      id: string;

      createdAt: string;

      description: string;

      name: string;
    }
  }
}

export type EntityCreateResponse = EntityData | unknown;

export type EntityRetrieveResponse = EntityWithSegments | unknown;

export type EntityListResponse = EntityWithSegmentsArray | unknown;

export interface EntityCreateParams {
  /**
   * Construct a type with a set of properties K of type T
   */
  properties: Record<string, unknown>;

  external_id?: string;
}

Entities.Events = Events;

export declare namespace Entities {
  export {
    type EntityData as EntityData,
    type EntityWithSegments as EntityWithSegments,
    type EntityWithSegmentsArray as EntityWithSegmentsArray,
    type EntityCreateResponse as EntityCreateResponse,
    type EntityRetrieveResponse as EntityRetrieveResponse,
    type EntityListResponse as EntityListResponse,
    type EntityCreateParams as EntityCreateParams,
  };

  export { Events as Events, type EventListResponse as EventListResponse };
}
