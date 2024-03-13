import React from 'react';
import './App.css';
import Modal from "./components/modal/Modal";
import Background from "./components/background/Background";
import { useSelector } from 'react-redux';

const App = () => {
  const theme = useSelector((state: any) => state.settings.theme);
  const blobColor = useSelector((state: any) => state.settings.blobColor);

  return (
    <div className="App" data-theme={theme}>
      <Background count={8} blobColor={blobColor}/>
      <Modal />
    </div>
  );
}

export default App;
