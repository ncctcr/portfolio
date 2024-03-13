import {CLEAR_HISTORY_KEYS_AND_SET_KEY, REMOVE_HISTORY_KEY, SET_CURRENT_KEY, SET_HISTORY_KEY} from "./types";

export const setCurrentKey = (payload: string) => {
  return {
    type: SET_CURRENT_KEY,
    payload,
  };
};

export const setHistoryKey = (payload: string) => {
  return {
    type: SET_HISTORY_KEY,
    payload,
  };
};
export const removeHistoryKey = () => {
  return {
    type: REMOVE_HISTORY_KEY,
  };
};

export const clearHistoryKeysAndSetKey = (payload: string) => {
  return {
    type: CLEAR_HISTORY_KEYS_AND_SET_KEY,
    payload,
  };
};