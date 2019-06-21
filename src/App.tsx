import * as React from 'react';
import { Transport } from './components/transport'
import './App.css'; 

class App extends React.Component<any, any> {
  public render() {
    return (
      <div className="App">
        <Transport />
      </div>
    );
  }
}

export default App;
