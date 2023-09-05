import GlobalStyles from '@styles/globals';
import router from './router';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
