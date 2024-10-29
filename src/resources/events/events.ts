// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as EventsAPI from './events';
import * as NamesAPI from './names';

export class Events extends APIResource {
  names: NamesAPI.Names = new NamesAPI.Names(this._client);

  create(body: EventCreateParams, options?: Core.RequestOptions): Core.APIPromise<EventCreateResponse> {
    return this._client.post('/events', { body, ...options });
  }

  list(query?: EventListParams, options?: Core.RequestOptions): Core.APIPromise<EventListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<EventListResponse>;
  list(
    query: EventListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<EventListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/events', { query, ...options });
  }
}

export interface EventData {
  data: EventData.Data | null;

  status: 'success' | 'error';

  message?: string;
}

export namespace EventData {
  export interface Data {
    entity_external_id: string;

    entity_id: string;

    name: string;

    org_id: string;

    /**
     * Construct a type with a set of properties K of type T
     */
    properties: Record<string, unknown>;

    timestamp: string | string;

    id?: string;
  }
}

export interface EventDataArray {
  data: Array<EventDataArray.Data> | null;

  status: 'success' | 'error';

  message?: string;
}

export namespace EventDataArray {
  export interface Data {
    entity_external_id: string;

    entity_id: string;

    name: string;

    org_id: string;

    /**
     * Construct a type with a set of properties K of type T
     */
    properties: Record<string, unknown>;

    timestamp: string | string;

    id?: string;
  }
}

export interface StringArray {
  data: Array<string> | null;

  status: 'success' | 'error';

  message?: string;
}

export type EventCreateResponse = EventData | unknown;

export type EventListResponse = EventDataArray | unknown;

export interface EventCreateParams {
  entity_external_id: string;

  name: string;

  /**
   * Construct a type with a set of properties K of type T
   */
  properties: Record<string, unknown>;
}

export interface EventListParams {
  entityId?: string;

  limit?: number;

  offset?: number;
}

export namespace Events {
  export import EventData = EventsAPI.EventData;
  export import EventDataArray = EventsAPI.EventDataArray;
  export import StringArray = EventsAPI.StringArray;
  export import EventCreateResponse = EventsAPI.EventCreateResponse;
  export import EventListResponse = EventsAPI.EventListResponse;
  export import EventCreateParams = EventsAPI.EventCreateParams;
  export import EventListParams = EventsAPI.EventListParams;
  export import Names = NamesAPI.Names;
  export import NameListResponse = NamesAPI.NameListResponse;
}
