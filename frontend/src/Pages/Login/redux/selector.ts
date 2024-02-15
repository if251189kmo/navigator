import { RootState } from '../../../redux/store';
import { AuthUserUi } from '../../../models/ui/login';

const root = (state: RootState) => state.loginReducer;

const isAuthenticate = (state: RootState) => root(state).isAuth;
const getAuthUser = (state: RootState): AuthUserUi => root(state).user;

export { isAuthenticate, getAuthUser };
