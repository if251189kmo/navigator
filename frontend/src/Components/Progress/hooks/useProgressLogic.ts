import { useAppSelector } from '../../../hooks/useRedux';
import { getCommonProgress } from '../redux/selector';

export const useProgressLogic = () => {
  const isCommonProgress = useAppSelector(getCommonProgress);

  return { isCommonProgress };
};
