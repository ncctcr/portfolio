import {
  SET_THEME,
  SET_LANGUAGE,
  SET_BLOB_COLOR,
  SET_PARALLAX_MODE,
  SET_FULLSCREEN_MODE,
  SET_BLOB_BLUR
} from "../actions/types";

type InitialState = {
  language: string
  theme: string
  blob: {
    color: string
    blur: number
  }
  parallaxMode: boolean
  fullScreenMode: boolean
}

const initialState: InitialState = {
  language: 'en',
  theme: 'dark',
  blob: {
    color: '#0699B41C',
    blur: 50
  },
  parallaxMode: false,
  fullScreenMode: false,
}

export const settingsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case SET_BLOB_COLOR:
      return {
        ...state,
        blob: {
          ...state.blob,
          color: action.payload
        },
      };
    case SET_BLOB_BLUR:
      return {
        ...state,
        blob: {
          ...state.blob,
          blur: action.payload
        }
      }
    case SET_PARALLAX_MODE:
      return {
        ...state,
        parallaxMode: action.payload
      }
    case SET_FULLSCREEN_MODE:
      return {
        ...state,
        fullscreenMode: action.payload
      }
    default:
      return state;
  }
};