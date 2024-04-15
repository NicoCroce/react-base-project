const host = 'http://127.0.0.1:3000';

export const API = async (path) => {
  const res = await fetch(`${host}/${path}`);
  return res.json();
};
