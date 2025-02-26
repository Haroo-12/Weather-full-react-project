import React from 'react';
  // React Router ko import karo
import RouterApp from './Config/RouterApp';
import { Provider } from './Config/CreateContext';

const App = () => {
  return (
       <Provider>
        <RouterApp />
      </Provider>

  );
}

export default App;
