import { createContext, useState, ReactNode, useEffect } from 'react';

type User = {
    id: string;
    email: string;
    password: string;
    token: string;
}

interface LoggedUserContextType {
    loggedUser: User | undefined;
    setLoggedUser: (user: User | undefined) => void;
}
interface LoggedUserProviderProps {
    children: ReactNode;
}

export const LoggedUserContext = createContext({} as LoggedUserContextType)

export function LoggedUserProvider({ children }: LoggedUserProviderProps) {
    const [loggedUser, setLoggedUser] = useState<User | undefined>(() => {
        const storedUser = localStorage.getItem('loggedUser');
        return storedUser ? JSON.parse(storedUser) : undefined;
    });

    useEffect(() => {
        if (loggedUser) {
            localStorage.setItem('loggedUser', JSON.stringify(loggedUser));
        } else {
            localStorage.removeItem('loggedUser');
        }
    }, [loggedUser]);

    return (
        <LoggedUserContext.Provider value={{
            loggedUser,
            setLoggedUser
        }}>
            {children}
        </LoggedUserContext.Provider>
    )
}
