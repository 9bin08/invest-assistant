import client from './client';

export const requestExamples = async () => {
  return await client.get('/products');
};
