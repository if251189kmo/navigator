// styles
import styles from './styles.module.scss';

type PictureProps = {
  classes?: string;
  src?: string;
  alt?: string;
};

function Picture(props: PictureProps) {
  const { alt, classes = styles.img, src } = props;

  return (
    <div className={classes}>
      <img src={src} alt={alt} width="100%" height="100%" />
    </div>
  );
}

export default Picture;
