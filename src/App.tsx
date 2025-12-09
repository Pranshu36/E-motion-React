import { RouterProvider } from 'react-router-dom';
import './App.css';

import AuthProvider from './features/auth/AuthProvider';
import { router } from './routes/router';

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
