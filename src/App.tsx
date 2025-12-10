import { RouterProvider } from 'react-router-dom';
import './App.css';

import ThemeProvider from './context/ThemeProvider';
import AuthProvider from './features/auth/context/AuthProvider';
import { router } from './routes/router';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
