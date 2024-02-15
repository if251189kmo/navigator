import { RootState } from '../../../redux/store';
import { LinkUi } from '../../../models/ui/link';

const root = (state: RootState) => state.linksReducer;

const getLinks = (state: RootState): LinkUi[] => root(state).links;

export { getLinks };
