import {
  REMOVE_HISTORY_KEY,
  SET_CURRENT_KEY,
  SET_HISTORY_KEY,
  CLEAR_HISTORY_KEYS_AND_SET_KEY
} from "../actions/types";
import {VIEWS} from "../../constants";

const initialState = {
  currentKey: 'general',
  historyKeys: ['general'],
  views: VIEWS,
}

export const dataReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_CURRENT_KEY:
      return {
        ...state,
        currentKey: action.payload,
      };
    case SET_HISTORY_KEY:
      return {
        ...state,
        historyKeys: [...state.historyKeys, action.payload]
      }
    case REMOVE_HISTORY_KEY:
      return {
        ...state,
        historyKeys: state.historyKeys.slice(0, -1)
      }

    case CLEAR_HISTORY_KEYS_AND_SET_KEY:
      return {
        ...state,
        historyKeys: ['general', action.payload]
      }
    default:
      return state;
  }
};