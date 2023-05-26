import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/admin/PanelAdmin.module.css';

const PanelAdmin = () => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');
  const navigate = useRouter();

  useEffect(() => {
    if (!user) navigate.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.panelContainer}>
      <h1>Configuraciones</h1>
      <ul>
        <Link className={styles.linksOptions} href="/admin/ourclub">
          <button>Nuestro Club</button>
        </Link>
        <Link className={styles.linksOptions} href="/admin/events">
          <button>Eventos</button>
        </Link>
        <Link className={styles.linksOptions} href="/admin/users">
          <button>Users</button>
        </Link>

        <Link className={styles.linksOptions} href="/">
          <button style={{ marginTop: '15%' }}>Página Principal</button>
        </Link>
      </ul>
    </div>
  );
};

export default PanelAdmin;
