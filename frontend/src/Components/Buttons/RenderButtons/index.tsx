// components
import Button, { ButtonProps } from '../Button';

// logic
import { setMarginByIndex } from '../utils';

// styles
import styles from '../styles.module.scss';

export type RenderButtonsProps = {
  buttons: ButtonProps[];
  classes?: string;
};

function RenderButtons(props: RenderButtonsProps) {
  const { buttons, classes = styles.renderButtons } = props;

  return (
    <div className={classes}>
      {buttons.map((button, i, arr) => {
        const { component: Component = Button, ...rest } = button;

        return <Component style={setMarginByIndex(i, arr)} key={+i} {...rest} />;
      })}
    </div>
  );
}

export default RenderButtons;
