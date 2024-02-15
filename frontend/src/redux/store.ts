import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer, { RootState } from './rootReducer';
import { TabsActions } from '../Pages/Tabs/redux/types';
import { LinksActions } from '../Pages/Links/redux/types';
import { ProgressActions } from '../Components/Progress/redux/types';
import { AlertsActions } from '../Components/Alerts/redux/types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const loggerMiddleware = createLogger();
const setupStore = () => createStore(rootReducer, applyMiddleware(thunk)); // loggerMiddleware

type AppStore = ReturnType<typeof setupStore>;
type AppActions = TabsActions | LinksActions | ProgressActions | AlertsActions;
type AppDispatch = ThunkDispatch<RootState, any, AppActions>;
type ThinkAsync = ThunkAction<Promise<void>, RootState, unknown, AppActions>;

export { setupStore };
export type { RootState, AppStore, AppDispatch, ThinkAsync };
