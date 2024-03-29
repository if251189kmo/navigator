// libraries
import { Typography } from '@mui/material';

// components
import RenderButtons from '../../Buttons/RenderButtons';

// types
import { ButtonProps } from '../../Buttons/Button';
import { TabUi } from '../../../models/ui/tab';

// styles
import styles from '../styles.module.scss';

export type TitleProps = {
  label: TabUi['label'];
  access: boolean;
  iconUrl: TabUi['iconUrl'];
} & {
  buttons: ButtonProps[];
};

function Title(props: TitleProps) {
  const { label, iconUrl, access, buttons } = props;

  return (
    <div className={styles.title}>
      <div className={styles.text}>
        <img src={iconUrl} alt="logo" />
        <Typography variant="h5">{label}</Typography>
      </div>
      {access && <RenderButtons buttons={buttons} />}
    </div>
  );
}
export default Title;
