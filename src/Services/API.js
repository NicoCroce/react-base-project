const host = 'http://127.0.0.1:3000';

const dispatchFetch = (method) => async (path, options) => {
  const res = await fetch(`${host}/${path}`, {
    method,
    ...options
  });
  return res.json();
};

export const API = {
  GET: dispatchFetch('GET'),
  PUT: dispatchFetch('PUT'),
  POST: dispatchFetch('POST'),
  DELETE: dispatchFetch('DELETE')
};
