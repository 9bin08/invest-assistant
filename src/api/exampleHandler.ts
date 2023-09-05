import { exampleData } from './exampleData';
import { rest } from 'msw';

const handlers = [
  rest.get('/products', async (req, res, context) => {
    return await res(context.status(200), context.json(exampleData));
  }),
];

export default handlers;
