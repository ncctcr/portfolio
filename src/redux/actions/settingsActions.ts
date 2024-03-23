// src/redux/actions/settingsActions.ts
import {
  SET_THEME,
  SET_LANGUAGE,
  SET_BLOB_COLOR,
  SET_PARALLAX_MODE,
  SET_FULLSCREEN_MODE,
  SET_BLOB_BLUR, SET_BLOB_COUNT
} from './types';

export const changeThemeAction = (payload: 'dark' | 'light') => {
  return {
    type: SET_THEME,
    payload,
  };
};
export const changeLanguageAction = (payload: string) => {
  return {
    type: SET_LANGUAGE,
    payload,
  };
};

export const changeBlobColor = (payload: string) => {
  return {
    type: SET_BLOB_COLOR,
    payload,
  };
};

export const changeBlobBlur = (payload: number) => {
  return {
    type: SET_BLOB_BLUR,
    payload,
  };
};

export const changeBlobCount = (payload: number) => {
  return {
    type: SET_BLOB_COUNT,
    payload,
  };
};

export const setParallaxMode = (payload: boolean) => {
  return {
    type: SET_PARALLAX_MODE,
    payload,
  };
};

export const setFullscreenMode = (payload: boolean) => {
  return {
    type: SET_FULLSCREEN_MODE,
    payload,
  };
};