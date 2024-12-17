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
  fetchUsersGetToken: (data: GetTokenSchema) => Promise<void>;
  fetchCreateUser: (data: CreateUserSchema) => Promise<void>;
  fetchError?: AxiosError;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserProviderType);

export function UserProvider({ children }: UserProviderProps) {
  const [token, setToken] = useState<GetTokenSchema | null>(null);
  const [fetchError, setFetchError] = useState<AxiosError | undefined>();

  const fetchUsersGetToken = useCallback(async (data: GetTokenSchema) => {
    const { email, password } = data;

    try {
      const response = await api.post('/user/session', {
        email,
        password,
      });
      setToken(response.data.token);
      console.log(token);
    } catch (error) {
      if (isAxiosError(error)) {
        setFetchError(error as AxiosError);
      } else {
        console.error('Unexpected error:', error);
      }
    }
  }, []);

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
        console.error('Unexpected error:', error);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ fetchUsersGetToken, fetchCreateUser, fetchError }}
    >
      {children}
    </UserContext.Provider>
  );
}
