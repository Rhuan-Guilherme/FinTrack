import { createContext, ReactNode, useCallback, useState } from 'react';
import { api } from '../lib/axios';
import { AxiosError, isAxiosError } from 'axios';

interface GetTokenSchema {
  email: string;
  password: string;
}

interface CreateUserSchema {
  name: string;
  email: string;
  password: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderType {
  fetchUsersGetToken: (data: GetTokenSchema) => Promise<boolean>;
  fetchCreateUser: (data: CreateUserSchema) => Promise<void>;
  fetchError?: AxiosError;
  token?: string;
  loged?: boolean;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserProviderType);

export function UserProvider({ children }: UserProviderProps) {
  const [loged, setLoged] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [fetchError, setFetchError] = useState<AxiosError | undefined>();

  const fetchDataUser = useCallback(async (token: string) => {
    try {
      const response = await api.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log(response.data);
      setLoged(true);
      setToken(token);
    } catch (error) {
      if (isAxiosError(error)) {
        setFetchError(error as AxiosError);
      } else {
        console.log(error);
      }
    }
  }, []);

  const fetchUsersGetToken = useCallback(
    async (data: GetTokenSchema) => {
      const { email, password } = data;

      try {
        const response = await api.post('/user/session', {
          email,
          password,
        });
        const token = response.data.token;
        fetchDataUser(token);
        return true;
      } catch (error) {
        if (isAxiosError(error)) {
          setFetchError(error as AxiosError);
        } else {
          console.log(error);
        }
        return false;
      }
    },
    [fetchDataUser]
  );

  const fetchCreateUser = useCallback(async (data: CreateUserSchema) => {
    const { email, password, name } = data;

    try {
      await api.post('/user/create', {
        name,
        email,
        password,
      });
    } catch (error) {
      if (isAxiosError(error)) {
        setFetchError(error as AxiosError);
      } else {
        console.log(error);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ fetchUsersGetToken, fetchCreateUser, fetchError, token, loged }}
    >
      {children}
    </UserContext.Provider>
  );
}
