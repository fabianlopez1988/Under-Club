import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { getAllEvent, getEvent, updateEvent } from '../../../../store/events';
import styles from '../../../../styles/admin/events/EditEvents.module.css';
import Form from 'react-bootstrap/Form';
import useInput from '../../../../utils/useInput';
import Swal from 'sweetalert2';
import Image from 'next/image';

const EditEvents = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();
  const id: string = (navigate.query.id ?? '').toString();

  const date = useInput();
  const url = useInput();

  const [baseImageLarge, setBaseImageLarge] = useState('');
  const [baseImageGrid, setBaseImageGrid] = useState('');
  const [loading, setLoading] = useState(true);

  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');

  useEffect(() => {
    if (!user) navigate.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    dispatch(getEvent(id));
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const eventsRedux = useSelector((state) => state.events);

  const uploadImageLarge = (e) => {
    const blob = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = () => {
      setBaseImageLarge(reader.result);
    };
  };

  const uploadImageGrid = (e) => {
    const blob2 = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(blob2);
    reader.onload = () => {
      setBaseImageGrid(reader.result);
    };
  };

  const handleClick = (blob, blob2) => {
    dispatch(
      updateEvent({
        flyerLarge: blob === '' ? eventsRedux?.flyerLarge : blob,
        flyerGrid: blob2 === '' ? eventsRedux?.flyerGrid : blob2,
        date: date.value === '' ? eventsRedux?.date : date.value,
        url: url.value === '' ? eventsRedux?.url : url.value,
      })
    )
      .then(() =>
        Swal.fire({
          icon: 'success',
          title: 'Actualizado',
          showConfirmButton: false,
          timer: 1500,
        })
      )
      .then(() => dispatch(getAllEvent()))
      .then(() => navigate.push('/admin/events'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (loading === true) {
    return null;
  }

  return (
    <div className={styles.editContainer}>
      <Form onSubmit={handleSubmit}>
        <h1>Eventos</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flyer Portada 1600 x 1600</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImageLarge(e);
            }}
          ></input>

          {!baseImageLarge && (
            <Image
              {...(!baseImageLarge ? { height: 150, width: 150 } : {})}
              src={eventsRedux?.flyerLarge}
              alt={eventsRedux?._id}
            />
          )}

          {baseImageLarge && (
            <Image
              src={baseImageLarge}
              alt="imgEvent"
              {...(baseImageLarge ? { height: 150, width: 150 } : {})}
            />
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Flyer Grilla (Cuadrado) 500 x 500</Form.Label>
          <br></br>
          <input
            type="file"
            onChange={(e) => {
              uploadImageGrid(e);
            }}
          ></input>
          {!baseImageGrid && (
            <Image
              {...(!baseImageGrid ? { height: 150, width: 150 } : {})}
              src={eventsRedux?.flyerGrid}
              alt={eventsRedux?._id}
            />
          )}
          {baseImageGrid && (
            <Image
              src={baseImageGrid}
              alt="imgEventSelected"
              {...(baseImageGrid ? { height: 150, width: 150 } : {})}
            />
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>date</Form.Label>
          <br></br>
          <input type="date" placeholder={eventsRedux?.date} {...date}></input>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Url</Form.Label>
          <br></br>
          <input type="text" placeholder={eventsRedux?.url} {...url}></input>
        </Form.Group>

        <button type="submit" onClick={() => handleClick(baseImageLarge, baseImageGrid)}>
          Guardar
        </button>
      </Form>
    </div>
  );
};

export default EditEvents;
