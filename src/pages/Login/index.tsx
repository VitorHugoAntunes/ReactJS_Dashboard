import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, SubmitHandler } from "react-hook-form";
import { v4 as uuidV4 } from 'uuid'

import { Banner, LoginContainer, LoginFormContainer } from "./styles";
import heroImage from '../../assets/heroImage.png';


import useUserToken from '../../hooks/useUserToken';
import useLoggedUser from '../../hooks/useLoggedUser';

type InputProps = {
    email: string
    password: string;
}

export default function Login() {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const { userToken } = useUserToken();
    const { loggedUser, setLoggedUser } = useLoggedUser();

    const navigate = useNavigate();

    function handleRedirectUser() {
        navigate('/');
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<InputProps>()

    const onSubmit: SubmitHandler<InputProps> = async (data) => {
        try {
            const userCredential = {
                user: {
                    id: uuidV4(),
                    email: userEmail,
                    password: userPassword,
                    token: uuidV4()
                }
            }

            const user = userCredential.user;

            if (user) {
                setLoggedUser(user);
                handleRedirectUser();
                setUserEmail('');
                setUserPassword('');
                console.log('Usuário logado com sucesso', loggedUser);
                console.log('Usuário logado com sucesso', user);
            } else {
                console.log('Usuário não encontrado');
            }

            if (userToken !== '') {
                console.log('token: ', userToken);
                console.log(data);
            }

        } catch (error) {
            throw new Error(`Erro ao logar usuário: ${error}`);
        }

    };

    return (
        <LoginContainer>
            <Banner className='banner'>
                <img src={heroImage} alt='Imagem do banner' />
                <h4>Acesso rápido, informações precisas. A evolução do seu dia a dia.</h4>
            </Banner>
            <LoginFormContainer>
                <h1>Login</h1>
                <p>Insira suas credenciais para entrar na plataforma.</p>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div>
                        <label htmlFor="">Email</label>
                        <input
                            type="text"
                            placeholder="Digite seu nome de usuario"
                            {...register("email", { required: true })}
                            value={userEmail}

                            onChange={(event) => setUserEmail(event.target.value)}
                        />
                        {errors.email && <span>Este campo é obrigatório</span>}
                    </div>

                    <div>
                        <label htmlFor="">Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            {...register("password", { required: true })}
                            value={userPassword}

                            onChange={(event) => setUserPassword(event.target.value)}
                        />
                        {errors.password && <span>Este campo é obrigatório</span>}
                    </div>

                    <button>Sign in</button>
                    <a href="">Esqueci minha senha</a>

                    {loggedUser && (
                        <div>
                            <p>Bem vindo {loggedUser.email}</p>
                            <p>Seu token é {loggedUser.token}</p>
                        </div>

                    )}
                </form>
            </LoginFormContainer>
        </LoginContainer>
    )
}