// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Limejourney from 'limejourney';
import { Response } from 'node-fetch';

const client = new Limejourney({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource entities', () => {
  test('create: only required params', async () => {
    const responsePromise = client.entities.create({ properties: { foo: 'bar' } });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.entities.create({ properties: { foo: 'bar' }, external_id: 'external_id' });
  });

  test('retrieve', async () => {
    const responsePromise = client.entities.retrieve('entityId');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.entities.retrieve('entityId', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Limejourney.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = client.entities.list();
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
    await expect(client.entities.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Limejourney.NotFoundError,
    );
  });
});
