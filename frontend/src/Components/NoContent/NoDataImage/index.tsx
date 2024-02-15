// constants
import labels from '../../../labels/Components/NoContent/NoDataImage/index.json';
import image from '../../../Images/no-data.png';

// styles
import styles from './styles.module.scss';

type NoDataImageProps = {
  classes?: string;
  src?: string;
  alt?: string;
};

function NoDataImage(props: NoDataImageProps) {
  const { alt = labels.noData, classes = styles.img, src = image } = props;

  return (
    <div className={classes}>
      <img src={src} alt={alt} width="100%" height="100%" />
    </div>
  );
}

export default NoDataImage;
