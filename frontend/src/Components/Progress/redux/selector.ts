import { RootState } from '../../../redux/store';

const root = (state: RootState) => state.progressReducer;
const getProgresses = (state: RootState) => root(state).progresses;

const getCommonProgress = (state: RootState) => getProgresses(state).common;

export { getCommonProgress };
