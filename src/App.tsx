import React from 'react';
import logo from './logo.svg';
import './App.css';
import { WebsocketContext, WebsocketProvider, socket } from './contexts/WebSocketContext';
import { Websocket } from './components/Websocket';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <WebsocketProvider value={socket}>
      <Websocket/>
    </WebsocketProvider>
  );
}

export default App;
