/* eslint-disable react-refresh/only-export-components */
import initMocks from '../__mocks__';
import { createBrowserRouter } from 'react-router-dom';
import { lazy, Suspense } from 'react';

if (import.meta.env.MODE === 'development') {
  await initMocks();
}

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback={<div>loading...</div>}>
        <div>init</div>
      </Suspense>
    ),
    errorElement: <div>error</div> ,
    children: [
    ],
  },
]);

export default router;
