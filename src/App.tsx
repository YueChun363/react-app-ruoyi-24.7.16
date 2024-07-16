import React from 'react';
import './App.less';
import { Button } from 'antd'

function App() {
  return (
    <div className="App">
      <header>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <span className='testA'>test msg</span>
      <Button type="primary">Button</Button>
    </div>
  );
}

export default App;
