import { useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../../styles/admin/events/EventAdmin.module.css';

const EventsAdmin = () => {
  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');
  const navigate = useRouter();

  useEffect(() => {
    if (!user) navigate.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.eventsContainer}>
      <h1>Configuraciones</h1>
      <ul>
        <Link className={styles.linksOptions} href="/admin/events/add-events">
          <button>Crear Evento</button>
        </Link>

        <Link className={styles.linksOptions} href="/admin/events/update-events">
          <button>Editar Evento</button>
        </Link>

        <Link className={styles.linksOptions} href="/admin/events/delete-events">
          <button>Borrar Evento</button>
        </Link>

        <Link className={styles.linksOptions} href="/admin">
          <button style={{ marginTop: '15%' }}>Volver Atrás</button>
        </Link>
      </ul>
    </div>
  );
};

export default EventsAdmin;
