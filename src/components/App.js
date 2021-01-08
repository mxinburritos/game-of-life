import React from 'react';
import 'semantic-ui-css/semantic.min.css';

import './App.css';
import Grid from './Grid/Grid';
import Options from './Options/Options';

const App = () => {
  return (
    <div className='container'>
      <h5>App</h5>
      <Grid style={{display: "flex", justifyContent: "center"}}/>
      {/* <Options /> */}
    </div>
  );
};

export default App;
