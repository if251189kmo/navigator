import { ButtonProps } from '../Button';

const setMarginByIndex = (i: number, arr: ButtonProps[]) => {
  const firstItem = i === 0;
  const lustItem = arr.length - 1 === i;

  if (firstItem) return { margin: '0 2.5px 0 0' };
  if (lustItem) return { margin: '0 0 0 2.5px' };
  return { margin: '0 2.5px' };
};

export { setMarginByIndex };
