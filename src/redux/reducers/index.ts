import { combineReducers } from 'redux';
import {settingsReducer} from "./settingsReducer";
import {dataReducer} from "./dataReducer";

const rootReducer = combineReducers({
  settings: settingsReducer,
  data: dataReducer
});

export default rootReducer;