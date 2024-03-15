import React, {useEffect} from 'react';
import './App.css';
import Modal from "./components/modal/Modal";
import Background from "./components/background/Background";
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAction} from "./redux/actions/settingsActions";
import useThemeDetector from "./hooks/useThemeDetector";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.settings.theme);
  const blobColor = useSelector((state: any) => state.settings.blob.color);
  const blur = useSelector((state: any) => state.settings.blob.blur);
  const isDarkTheme = useThemeDetector();

  useEffect(() => {
    dispatch(changeThemeAction(isDarkTheme ? 'dark' : 'light'));
  }, []);

  return (
    <div className="App" data-theme={theme}>
      {window.innerWidth <= 768 ? null : <Background count={8} blobColor={blobColor} blur={blur}/> }
      <Modal />
    </div>
  );
}

export default App;
