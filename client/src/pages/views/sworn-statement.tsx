import { useState, useEffect, ReactEventHandler, useRef } from 'react';
import ArrowApp from '@/commons/arrowApp';
import ButtonApp from '@/commons/buttonApp';
import { Container, Box, Typography } from '@mui/material';
import styles from '../../styles/SwornStarment.module.css';
import Checkbox from '@mui/material/Checkbox';
import SwitchSworn from '../../commons/switchSworn';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { formCreate } from '../../store/formSworn';
import { userLogout } from '@/store/user';
import { useAlert } from '@/hook/Alerthook';
import Spinner from '@/commons/Spinner';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';

interface User {
  admin: boolean;
}

const SwornStatement = () => {
  const repetitiveText = [
    {
      text: '¿Ha consumido bebidas alcohólicas en las últimas 24 horas?',
      name: 'alcohol',
    },
    {
      text: '¿Usted está haciendo uso de medicamentos psicoactivos? (tranquilizantes,antigripales,antialérgicos o para insomnio)',
      name: 'medicines',
    },
    {
      text: '¿Tiene usted algún problema familiar emocional o de cualquier tipo que lo distraiga?',
      name: 'problems',
    },
  ];

  const [answers, setAnswers] = useState({});
  const [buttonValidate, setButtonValidate] = useState<boolean>(true);
  const [buttonSubmitLoading, setButtonSubmitLoading] = useState<boolean>(false);
  const [buttonClicks, setButtonClicks] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(false);

  const [userInLocalStorage, setUserInLocalStorage] = useState<string>('');
  useEffect(() => {
    const user = typeof window !== 'undefined' && JSON.parse(localStorage.getItem('user') ?? '');
    setUserInLocalStorage(user);
  }, []);
  const showAlert = useAlert();
  const navigate = useRouter();
  const dispatch = useDispatch();

  const checkboxRef = useRef(null);

  const handleClickTextOfCheckbox = () => {
    if (!checkboxRef.current) {
      showAlert(
        {
          message: `Selecciona todos los campos y activa el checkbox`,
          typeAlert: 'error',
          showCloseButton: true,
        },
        { autoHideDuration: 3000 }
      );
      return;
    }
    checkboxRef.current.click();
  };

  if (userInLocalStorage.admin === true) {
    navigate.push('/views/manage-schedule');
  }

  const dataForm = {
    user: userInLocalStorage.id,
    ...answers,
  };

  const hasRequiredFields = (dataForm: {}) => {
    const requiredFields = ['alcohol', 'medicines', 'problems'];
    return requiredFields.every((field) => dataForm.hasOwnProperty(field));
  };

  const handleButtonClick = () => {
    setButtonClicks((prevClicks) => prevClicks + 1);
  };
  const handleLogout = () => {
    dispatch(userLogout()).then(() => navigate.push('/'));
    localStorage.removeItem('userLoggedInBefore');
  };

  const handleButtonClickDesactivate = () => {
    return showAlert(
      {
        message: `Tiene que completar todos los campos `,
        typeAlert: 'error',
        showCloseButton: true,
      },
      { autoHideDuration: 3000 }
    );
  };
  useEffect(() => {
    setButtonValidate(!hasRequiredFields(answers));
  }, [answers]);

  const handleSubmitSwornStatement = (event: ReactEventHandler) => {
    event.preventDefault();
    setButtonSubmitLoading(true);
    dispatch(formCreate(dataForm))
      .then(() =>
        showAlert(
          {
            message: `El formulario se creó correctamente`,
            typeAlert: 'success',
            showCloseButton: true,
          },
          { autoHideDuration: 1000 }
        )
      )
      .then(() => setIsLoading(true))
      .then(() => navigate.push('/views/start-workday'))
      .catch((err) => console.log(err));
  };

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container maxWidth={'xs'} disableGutters={true}>
          <>
            <ArrowApp onClick={handleLogout} className={styles.arrow} />

            <form onSubmit={handleSubmitSwornStatement}>
              <Box className={styles.BoxwordAdd}>
                <Typography variant="h6" className={styles.wordTittle}>
                  Declaración jurada
                </Typography>
                {repetitiveText.map((repetitive, index) => (
                  <Box key={index} className={styles.BoxwordAdd}>
                    <Typography variant="h6" className={styles.wordText}>
                      {repetitive.text}
                    </Typography>
                    <Box className={styles.BoxSwitches}>
                      <SwitchSworn
                        checked={answers[repetitive.name] === 'si'}
                        onChange={(value) =>
                          setAnswers((prevAnswers) => ({
                            ...prevAnswers,
                            [repetitive.name]: value,
                          }))
                        }
                      />
                    </Box>
                  </Box>
                ))}
              </Box>

              <Box className={styles.ButtonApp}>
                <Box className={styles.BoxOfCheckbox}>
                  {buttonValidate ? (
                    <span className={styles.BoxOfCheckbox} onClick={handleButtonClickDesactivate}>
                      <Checkbox required disabled={true} />
                    </span>
                  ) : (
                    <Checkbox required disabled={false} inputRef={checkboxRef} id="myCheckbox" />
                  )}

                  <Typography
                    variant="p"
                    className={styles.wordTextTrue}
                    htmlFor="myCheckbox"
                    variant="p"
                    onClick={handleClickTextOfCheckbox}
                    style={{ cursor: 'pointer' }}
                  >
                    Declaro que mis respuestas fueron totalmente verdaderas y que he respondido a
                    todas las preguntas con la mayor honestidad posible.
                  </Typography>
                </Box>

                {buttonValidate ? (
                  <span onClick={handleButtonClickDesactivate}>
                    <ButtonApp typeofButton="submit" variantButton="contained" isDisable={true}>
                      No Puedes Continuar
                    </ButtonApp>
                  </span>
                ) : !buttonSubmitLoading ? (
                  <ButtonApp
                    typeofButton="submit"
                    variantButton="contained"
                    isDisable={false}
                    onClick={handleButtonClick}
                  >
                    Continuar
                  </ButtonApp>
                ) : (
                  <Box className={styles.buttonLoading}>
                    <LoadingButton
                      loading
                      size="small"
                      loadingPosition="start"
                      startIcon={<SaveIcon />}
                      variant="outlined"
                      fullWidth
                    >
                      Cargando...
                    </LoadingButton>
                  </Box>
                )}
              </Box>
            </form>
          </>
        </Container>
      )}
    </>
  );
};

export default SwornStatement;
