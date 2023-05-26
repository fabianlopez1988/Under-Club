import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { addEvent } from '../../../../store/events';
import useInput from '../../../../utils/useInput';
import styles from '../../../../styles/admin/events/AddEvent.module.css';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Swal from 'sweetalert2';

const AddEvents = () => {
  const dispatch = useDispatch();
  const navigate = useRouter();

  const date = useInput();
  const url = useInput();

  const [baseImageLarge, setBaseImageLarge] = useState('');

  const [baseImageGrid, setBaseImageGrid] = useState('');

  const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');

  useEffect(() => {
    if (!user) navigate.push('/');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

  const errorAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Debes completar todos los campos!',
    });
  };

  const handleClick = (baseImage, baseImage2) => {
    dispatch(
      addEvent({
        flyerLarge: baseImage ? baseImage : errorAlert(),
        flyerGrid: baseImage2 ? baseImage2 : errorAlert(),
        date: date.value.length === 0 ? errorAlert() : date.value,
        url: url.value.length === 0 ? errorAlert() : url.value,
      })
    )
      .then(() =>
        Swal.fire({
          icon: 'success',
          title: 'Creado',
          showConfirmButton: false,
          timer: 2500,
        })
      )
      .then(() => navigate.push('/admin/events'));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className={styles.addEventsContainer}>
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
            {baseImageLarge && (
              <Image
                src={baseImageLarge}
                alt=""
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
            {baseImageGrid && (
              <Image
                src={baseImageGrid}
                alt=""
                {...(baseImageGrid ? { height: 150, width: 150 } : {})}
              />
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Fecha del evento</Form.Label>
            <br></br>
            <input type="date" placeholder="Ingrese la fecha del evento" {...date}></input>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Url del evento</Form.Label>
            <br></br>
            <input type="text" placeholder="Ingrese la url del evento" {...url}></input>
          </Form.Group>

          <button
            className={styles.submit}
            type="submit"
            onClick={() => handleClick(baseImageLarge, baseImageGrid)}
          >
            Guardar
          </button>
        </Form>
      </div>
    </>
  );
};

export default AddEvents;
