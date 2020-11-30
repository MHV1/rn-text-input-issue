import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/reducers';
import FormEdit from './src/screens/FormEdit';

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <FormEdit />
    </Provider>
  );
};

export default App;
