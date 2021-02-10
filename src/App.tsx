import React from 'react';
import {TextField} from './TextField';
//import './App.css';

const App: React.FC = () => {
  return <div>
    <TextField text='hi' person={{ firstName:'Bob', lastName:'Green'}}/>
  </div>;
};

export default App;
