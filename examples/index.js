import React from 'react';

import { StateManager } from '../srsm2000';
import testReducer from './Reducers/TestReducer';

import Component1 from './Components/Component1';
import Component2 from './Components/Component2';

// static -> init first instance
new StateManager({
    test: testReducer,
    // ...
});

const App = () => (
    <div>
        <Component1 />
        <Component2 />
    </div>
);
  
  
render(<App/>, document.getElementById('root'));