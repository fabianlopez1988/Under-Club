import Head from 'next/head';
import 'animate.css';
import React, { useEffect, useState } from 'react';
import { Inter } from '@next/font/google';
import styles from '../styles/Login.module.css';
import { Box, Container, Button, Typography } from '@mui/material';
import Image from 'next/image';
import brand from '../../src/assets/brand.png';
import Link from 'next/link';
import InputPassword from '../commons/InputPassword';
import InputEmail from '../commons/InputEmail';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '@/store/user';
import axios from 'axios';
import { useAlert } from '@/hook/Alerthook';
import Spinner from '@/commons/Spinner';
import branding from '../assets/branding.svg';

const inter = Inter({ subsets: ['latin'] });

interface LoginFormData {
  email: string;
  password: string;
}

const API_URL = process.env.NEXT_PUBLIC_LOCAL_API_KEY;

async function getAllFormSwornByUser(userId: string) {
  if (!userId) {
    return [];
  }
  const response = await axios.get(`${API_URL}/formsworn/getAll`, { params: { userId } });
  return response.data;
}

export default function Login() {
  const showAlert = useAlert();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useRouter();
  const dispatch = useDispatch<any>();
  const userRedux = useSelector((state) => state.user);
  const userId = userRedux?.id ?? null;

  const [formsByUser, setFormsByUser] = useState([]);
  const [hasFormToday, setHasFormToday] = useState(false);
  const [animationLogin, setAnimationLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitOfLogin = (data: LoginFormData) => {
    dispatch(userLogin({ data, showAlert, setAnimationLogin, setIsLoading }));
  };

  useEffect(() => {
    const userLocal = localStorage.getItem('user');

    if (userLocal) {
      try {
        const parsedUser = JSON.parse(userLocal);

        if (parsedUser.admin === true) {
          navigate.push('/views/manage-schedule');
        } else {
          navigate.push('/views/start-workday');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
        // Manejar el error de análisis de JSON, por ejemplo, redireccionar a una página de error o mostrar un mensaje al usuario.
      }
    }
  }, []);

  useEffect(() => {
    if (userId !== null && userId !== undefined) {
      getAllFormSwornByUser(userId)
        .then((formSwornList) => {
          setFormsByUser(formSwornList);

          const today = new Date().toISOString().slice(0, 10);
          const hasForm = formSwornList.some((form) => {
            return form.user === userId && form.createdAt.slice(0, 10) === today;
          });
          setHasFormToday(hasForm);

          if (hasForm) {
            navigate.push('/views/start-workday');
          } else if (userRedux.admin) {
            navigate.push('/views/manage-schedule');
          } else {
            navigate.push('/views/sworn-statement');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [userId]);

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      {isLoading ? (
        <Spinner />
      ) : (
        <Container maxWidth={'xs'}>
          <Box className={styles.boxspace}></Box>
          <Box className={styles.boxBrand}>
            <Image
              className={`${
                styles.brand
              } animate__animated animate__backInLeft animate__duration-1s 
  ${animationLogin ? 'animate__animated animate__bounceOutRight animate__duration-1s' : ''}

`}
              src={branding}
              alt="Fast Delivery Brand"
            />
          </Box>
          <form onSubmit={handleSubmit(onSubmitOfLogin)}>
            <InputEmail name="email" register={register} errors={errors} />
            <InputPassword name="password" register={register} errors={errors} />
            <Button fullWidth variant="contained" type="submit">
              Ingresar
            </Button>
          </form>
          <Box className={styles.boxLinks}>
            {isLoading ? (
              <Spinner />
            ) : (
              <Link href="/views/register">
                <Typography
                  className={styles.TextLiks}
                  sx={{ fontWeight: '700' }}
                  variant="inherit"
                  color="primary"
                  onClick={() => setIsLoading(true)}
                >
                  Registrarse
                </Typography>
              </Link>
            )}
          </Box>
        </Container>
      )}
    </>
  );
}
