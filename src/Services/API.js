import { persistMutation } from '@/Utils/Persist';

const host = 'http://127.0.0.1:3000';

/** Fetch personalizado con manejo de errores y persistencia */

const dispatchFetch = (method) => async (path, options) => {
  // Get all attributes nedded.
  const { body, idPersisted, ...restOptions } = options || {};

  try {
    // Execute 'fetch' with settled settings
    const res = await fetch(`${host}/${path}`, {
      ...restOptions,
      method,
      ...(body && { body: JSON.stringify(body) }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!res.ok) {
      // If an error occurs because the connection is not established, return 'idPersisted' in case to be a stored mutation.
      throw idPersisted || res.statusText;
    }

    // If fetch is success, return 'idPersisted' in case to be exist.
    if (idPersisted) return idPersisted;

    // In normal and general fetch,return the response data.
    const response = await res.json();
    return response;
  } catch (err) {
    // Catch all errors. If is mutation and it wasn't sotored. Persist mutation in indexDB.
    !idPersisted &&
      method !== 'GET' &&
      err.message === 'Failed to fetch' &&
      (await persistMutation({ method, path, body, restOptions }));
    throw err;
  }
};

export const API = {
  GET: dispatchFetch('GET'),
  PUT: dispatchFetch('PUT'),
  POST: dispatchFetch('POST'),
  DELETE: dispatchFetch('DELETE')
};
