// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Limejourney from 'limejourney';
import { Response } from 'node-fetch';

const client = new Limejourney({ baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010' });

describe('resource events', () => {
  test('create: only required params', async () => {
    const responsePromise = client.events.create({
      entity_external_id: 'entity_external_id',
      name: 'name',
      properties: { foo: 'bar' },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.events.create({
      entity_external_id: 'entity_external_id',
      name: 'name',
      properties: { foo: 'bar' },
    });
  });

  test('list', async () => {
    const responsePromise = client.events.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.events.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Limejourney.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.events.list({ entityId: 'entityId', limit: 0, offset: 0 }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Limejourney.NotFoundError);
  });
});
