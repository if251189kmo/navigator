// logic
import { useFetchLinks } from './hooks/useFetchLinks';

// styles
import styles from './styles.module.scss';

function Links() {
  const { links } = useFetchLinks();

  return (
    <div className={styles.links}>
      <h1>Посилання</h1>
      <ul>
        {links.map(({ id, code, label, url }) => {
          return (
            <li key={id}>
              <em>{code}</em> <strong>{label}</strong> <em>{`href: ${url}`}</em>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Links;
