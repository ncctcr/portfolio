import React, {useEffect} from 'react';
import './App.css';
import Modal from "./components/modal/Modal";
import Background from "./components/background/Background";
import {useDispatch, useSelector} from 'react-redux';
import {changeThemeAction} from "./redux/actions/settingsActions";
import useThemeDetector from "./hooks/useThemeDetector";
import useScreenSize from "./hooks/useScreenSize";
import {TABLET_WIDTH} from "./constants";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: any) => state.settings.theme);
  const blobColor = useSelector((state: any) => state.settings.blob.color);
  const blur = useSelector((state: any) => state.settings.blob.blur);
  const isDarkTheme = useThemeDetector();
  const screenSize = useScreenSize()
  const isMobile = screenSize.width <= TABLET_WIDTH

  useEffect(() => {
    dispatch(changeThemeAction(isDarkTheme ? 'dark' : 'light'));
  }, []);

  return (
    <div className="App" data-theme={theme}>
      {isMobile ? null : <Background count={8} blobColor={blobColor} blur={blur}/> }
      <Modal />
    </div>
  );
}

export default App;
