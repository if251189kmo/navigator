import { hexToRgb } from '../../../helpers/hexToRgb';
import colors from '../../colors.module.scss';

const primary = hexToRgb(colors.primary);
const neutral = hexToRgb(colors.neutral);

const palette = {
  primary: {
    main: primary,
  },
  neutral: {
    main: neutral,
  },
};

export default palette;
