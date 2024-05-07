import { ReactNode, useEffect } from 'react';
import { createContext, useState } from 'react';
import useLoggedUser from '../hooks/useLoggedUser';

interface UserTokenContextType {
    userToken: string;
    setUserToken: (token: string) => void;
}

interface UserTokenProviderProps {
    children: ReactNode;
}

export const UserTokenContext = createContext({} as UserTokenContextType);

export function UserTokenProvider({ children }: UserTokenProviderProps) {
    const { loggedUser } = useLoggedUser();
    const [userToken, setUserToken] = useState<string | ''>(() => {
        const storedToken = localStorage.getItem('userToken');
        return storedToken ? storedToken : '';
    }

    );

    useEffect(() => {
        if (loggedUser) {
            localStorage.setItem('userToken', loggedUser.token);
            setUserToken(loggedUser.token);
        } else {
            localStorage.removeItem('userToken');
        }
    }, [loggedUser, userToken]);

    return (
        <UserTokenContext.Provider value={{ userToken, setUserToken }}>
            {children}
        </UserTokenContext.Provider>
    );
}
