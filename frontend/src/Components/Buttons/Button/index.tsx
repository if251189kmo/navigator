// libraries
import {
  IconButton,
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
  SvgIconTypeMap,
} from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type ButtonProps = {
  label?: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;
} & MuiButtonProps;

function Button(props: ButtonProps) {
  const {
    size = 'small',
    fullWidth = true,
    label,
    icon: Icon,
    variant = 'contained',
    ...rest
  } = props;

  if (!label && Icon) {
    return (
      <IconButton size={size} {...rest}>
        <Icon />
      </IconButton>
    );
  }
  return (
    <MuiButton size={size} fullWidth={fullWidth} variant={variant} {...rest}>
      {label}
    </MuiButton>
  );
}

export default Button;
