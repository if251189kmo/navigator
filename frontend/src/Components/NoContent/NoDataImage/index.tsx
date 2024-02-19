// constants
import labels from '../../../labels/Components/NoContent/NoDataImage/index.json';
import image from '../../../Images/no-data.png';

// components
import Picture from '../../Picture';

type NoDataImageProps = {
  src?: string;
  alt?: string;
};

function NoDataImage(props: NoDataImageProps) {
  const { alt = labels.noData, src = image, ...rest } = props;

  return <Picture alt={alt} src={src} {...rest} />;
}

export default NoDataImage;
