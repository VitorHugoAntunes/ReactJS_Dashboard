import { useContext } from 'react'
import { UserTokenContext } from '../contexts/UserTokenContext';

export default function useUserTokenContext() {
    const { userToken, setUserToken } = useContext(UserTokenContext);

    return {
        userToken,
        setUserToken
    }
}