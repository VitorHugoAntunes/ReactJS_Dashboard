import { ReactNode } from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import useUserTokenContext from '../hooks/useUserToken';
import { useLocation } from 'react-router-dom';
import users from '../data/users.json'

interface UserDataProps {
    firstName: string;
    lastName: string;
    email: string;
    whatsapp: string;
    createdAt: string;
}

export interface User {
    id: string;
    data: UserDataProps;
}

// Tipagem do contexto
interface UsersContextType {
    usersData: User[],
    dataLoading: boolean;
    setDataLoading: (status: boolean) => void;
}

interface UsersProviderProps {
    children: ReactNode;
}

export const UsersContext = createContext({} as UsersContextType)

const USERS_DATA_STORAGE_KEY = 'admin:1.0.0:usersData';

export function UsersProvider({ children }: UsersProviderProps) {
    const [usersData, setUsersData] = useState<User[]>([]);
    const [localData, setLocalData] = useState<User[]>([]);
    const [dataLoading, setDataLoading] = useState<boolean>(true);

    const { userToken, setUserToken } = useUserTokenContext();

    const location = useLocation();

    useEffect(() => {
        setUserToken(localStorage.getItem('admin:1.0.0:token') || '');

        const localUsersData = localStorage.getItem(USERS_DATA_STORAGE_KEY);
        setLocalData(JSON.parse(localUsersData || 'null'));

        // Verifica se já existe dados locais, se não, puxa do arquivo JSON
        if (!localUsersData) {
            const jsonData: User[] = users.map((user) => ({
                id: user.id,
                data: {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    whatsapp: user.whatsapp,
                    createdAt: user.date,
                },
            }));

            localStorage.setItem(USERS_DATA_STORAGE_KEY, JSON.stringify(jsonData));
            setUsersData(jsonData);
            setDataLoading(false);
        } else {
            const parsedData: User[] = JSON.parse(localUsersData);
            setUsersData(parsedData);
            setDataLoading(false);
        }
    }, [location.pathname]);

    return (
        <UsersContext.Provider value={{
            usersData,
            dataLoading,
            setDataLoading
        }}>
            {children}
        </UsersContext.Provider>
    )
}