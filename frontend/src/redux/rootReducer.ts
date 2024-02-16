import { combineReducers } from 'redux';
import { AlertsState } from '../Components/Alerts/redux/types';
import { ProgressState } from '../Components/Progress/redux/types';
import { LinksState } from '../Pages/Links/redux/types';
import { TabsState } from '../Pages/Tabs/redux/types';
import { LoginState } from '../Pages/Login/redux/types';
import { AdminState } from '../Pages/Administration/redux/types';
import tadsReducer from '../Pages/Tabs/redux/reducer';
import linksReducer from '../Pages/Links/redux/reducer';
import progressReducer from '../Components/Progress/redux/reducer';
import alertsReducer from '../Components/Alerts/redux/reducer';
import loginReducer from '../Pages/Login/redux/reducer';
import adminReducer from '../Pages/Administration/redux/reducer';

const rootReducer = combineReducers({
  loginReducer,
  tadsReducer,
  linksReducer,
  progressReducer,
  alertsReducer,
  adminReducer,
});

type RootState = {
  loginReducer: LoginState;
  tadsReducer: TabsState;
  linksReducer: LinksState;
  progressReducer: ProgressState;
  alertsReducer: AlertsState;
  adminReducer: AdminState;
};

export type { RootState };
export default rootReducer;
