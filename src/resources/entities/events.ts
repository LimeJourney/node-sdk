// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as EventsAPI from './events';
import * as EventsEventsAPI from '../events/events';

export class Events extends APIResource {
  list(entityId: string, options?: Core.RequestOptions): Core.APIPromise<EventListResponse> {
    return this._client.get(`/entities/${entityId}/events`, options);
  }
}

export type EventListResponse = EventsEventsAPI.EventDataArray | unknown;

export namespace Events {
  export import EventListResponse = EventsAPI.EventListResponse;
}
