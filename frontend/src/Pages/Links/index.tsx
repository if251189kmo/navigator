import { useFetchLinks } from './hooks/useFetchLinks';

function Links() {
  const { links } = useFetchLinks();

  return (
    <div>
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
