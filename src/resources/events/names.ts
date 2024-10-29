// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as NamesAPI from './names';
import * as EventsAPI from './events';

export class Names extends APIResource {
  list(options?: Core.RequestOptions): Core.APIPromise<NameListResponse> {
    return this._client.get('/events/names', options);
  }
}

export type NameListResponse = EventsAPI.StringArray | unknown;

export namespace Names {
  export import NameListResponse = NamesAPI.NameListResponse;
}
