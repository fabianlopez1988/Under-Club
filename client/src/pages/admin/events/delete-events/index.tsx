import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getAllEvent } from '../../../../store/events';
import DeleteEventCard from '../../../../components/DeleteEventCard';
import styles from '../../../../styles/admin/events/DeleteEvent.module.css';

const DeleteEvent = () => {
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
    <div className={styles.deleteContainerEvent}>
      <h1>Borrar Evento</h1>
      <div className="grid">
        {events?.data.map((event) => (
          <DeleteEventCard key={event._id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DeleteEvent;
