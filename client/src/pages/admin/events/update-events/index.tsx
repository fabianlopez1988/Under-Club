import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from '../../../../styles/admin/events/UpdateEvents.module.css';
import { getAllEvent } from '../../../../store/events';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

const UpdateEvents = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');

  useEffect(() => {
    if (!user) navigate.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getAllEvent());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const events = useSelector((state) => state.events);

  return (
    <div className={styles.updateEventContainer}>
      <h1>Editar Evento</h1>
      <div className={styles.grid}>
        {events?.data?.map((event, i) => (
          <div key={i}>
            <Link href={`/admin/events/update-events/${event._id}`}>
              {event && (
                <Image
                  className={styles.imgEvent}
                  src={event.flyerGrid}
                  alt={event._id}
                  {...(event ? { height: 150, width: 150 } : {})}
                />
              )}
            </Link>
            <div className={styles.date}>{event.date.split('T')[0]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateEvents;
