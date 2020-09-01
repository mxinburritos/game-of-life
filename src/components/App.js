import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import Grid from './Grid/Grid';
import Menu from './Options/Options';

const App = () => {
  return (
    <div className='container'>
      <h5>App</h5>
      <Grid />
      <Menu />
    </div>
  );
};

export default App;
