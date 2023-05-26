import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { deleteEvent, getAllEvent } from '../store/events';
import Image from 'next/image';
import Swal from 'sweetalert2';
import styles from '../styles/admin/events/DeleteEventCard.module.css';

const DeleteEventCard = ({ event }) => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');

  useEffect(() => {
    if (!user) navigate.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id))
      .then(() =>
        Swal.fire({
          icon: 'success',
          title: 'Borrado',
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllEvent()));
  };

  return (
    <div className={styles.cardContainerEvent}>
      {event && (
        <Image
          className={styles.imgEvent}
          {...(event ? { height: 150, width: 150 } : {})}
          src={event.flyerGrid}
          alt={event._id}
        />
      )}
      <button onClick={() => handleDelete(event._id)}>Borrar</button>
    </div>
  );
};

export default DeleteEventCard;
