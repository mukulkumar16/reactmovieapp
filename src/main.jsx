import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';

import App from './App.jsx';
// import { AuthProvider } from './component/AuthContext.jsx';
import { BrowserRouter } from "react-router-dom";
import { FavoritesProvider } from './component/FavContext.jsx';

import { store } from './store/store.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        {/* <AuthProvider> */}
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        {/* </AuthProvider> */}
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
