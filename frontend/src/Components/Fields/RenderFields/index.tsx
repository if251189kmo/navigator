// types
import { InputProps } from '../Input';

// styles
import styles from '../styles.module.scss';

type Field = { component: React.FC<InputProps> } & InputProps;
type RenderFieldsProps = { classes?: string; fields: Field[] };

function RenderFields(props: RenderFieldsProps) {
  const { fields, classes = styles.renderFields } = props;

  return (
    <div className={classes}>
      {fields.map((field) => {
        const { component: Component, ...rest } = field;

        return <Component key={rest.name} {...rest} />;
      })}
    </div>
  );
}

export default RenderFields;
