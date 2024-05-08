import Box from '../../components/Box';
import useLoggedUser from '../../hooks/useLoggedUser';
import useUserToken from '../../hooks/useUserToken';
import { InfoContainer, InfoDiv, SignOutButton } from './styles';
import { useNavigate } from 'react-router-dom';
import { FiClipboard } from 'react-icons/fi'
import toast, { Toaster } from 'react-hot-toast'

export default function Profile() {
    const { loggedUser } = useLoggedUser();
    const { userToken } = useUserToken();
    const navigate = useNavigate();

    function copyToClipboard(elementId: string) {
        const element = document.getElementById(elementId) as HTMLInputElement | null;
        if (element) {
            window.navigator.clipboard.writeText(element.value);
        }

        showToast();
    }

    function showToast() {
        toast.success('Copiado para a área de transferência', {
            duration: 2000,
        })
    }

    function handleSignOut() {
        localStorage.removeItem('loggedUser');
        localStorage.removeItem('userToken');
        navigate('/login');
    }

    return (
        <>
            <h1>Profile</h1>
            {loggedUser && userToken && (
                <div>
                    <Box>
                        <InfoContainer>
                            <InfoDiv>
                                <h3>Token de acesso:</h3>

                                <div>
                                    <input id='loggedUserToken' type='text' value={loggedUser.token} readOnly />
                                    <button onClick={() => copyToClipboard("loggedUserToken")}>
                                        <FiClipboard size={24} />
                                    </button>
                                </div>
                            </InfoDiv>
                        </InfoContainer>
                    </Box>

                    <Box>
                        <InfoContainer>
                            <InfoDiv>
                                <h3>Sua conta atual:</h3>
                                <div>
                                    <input id='loggedUserEmail' type='text' value={loggedUser.email} readOnly />
                                    <button onClick={() => copyToClipboard("loggedUserEmail")}>
                                        <FiClipboard size={24} />
                                    </button>
                                </div>
                            </InfoDiv>
                            <SignOutButton onClick={handleSignOut}>Desconectar</SignOutButton>
                        </InfoContainer>
                    </Box>
                </div>
            )}
            <Toaster position='bottom-center' />
        </>
    );
}