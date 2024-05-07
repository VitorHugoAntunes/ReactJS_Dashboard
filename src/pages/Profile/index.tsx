import useLoggedUser from '../../hooks/useLoggedUser';
import useUserToken from '../../hooks/useUserToken';

export default function Profile() {
    const { loggedUser } = useLoggedUser();
    const { userToken } = useUserToken();
    return (
        <>
            <h1>Profile</h1>
            {loggedUser && userToken && (
                <div>
                    <p>Bem vindo {loggedUser.email}</p>
                    <p>Seu token é {userToken}</p>
                </div>
            )}
        </>
    );
}