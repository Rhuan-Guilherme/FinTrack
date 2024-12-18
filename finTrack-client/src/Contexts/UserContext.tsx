import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from 'react';
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

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserProviderType {
  fetchUsersGetToken: (data: GetTokenSchema) => Promise<boolean>;
  fetchCreateUser: (data: CreateUserSchema) => Promise<void>;
  singout: () => void;
  fetchError?: AxiosError;
  token?: string;
  loged?: boolean;
  data: User | null;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserProviderType);

export function UserProvider({ children }: UserProviderProps) {
  const [loged, setLoged] = useState<boolean>(false);
  const [token, setToken] = useState<string>('');
  const [data, setData] = useState<User | null>(null);
  const [fetchError, setFetchError] = useState<AxiosError | undefined>(
    undefined
  );

  const fetchDataUser = useCallback(async (token: string) => {
    try {
      const response = await api.get('/user', {
        headers: { Authorization: `Bearer ${token}` },
      });
      localStorage.setItem('@fintrack/token', token);
      setLoged(true);
      setToken(token);
      setData(response.data);
    } catch (error) {
      if (isAxiosError(error)) {
        setFetchError(error as AxiosError);
      } else {
        console.log(error);
      }
      setLoged(false);
      setData(null);
      setToken('');
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
        setLoged(false);
        setData(null);
        setToken('');
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

  useEffect(() => {
    const token = localStorage.getItem('@fintrack/token');
    if (token) {
      fetchDataUser(token);
    } else {
      setLoged(false);
      setData(null);
      setToken('');
    }
  }, [fetchDataUser]);

  const singout = useCallback(async () => {
    localStorage.removeItem('@fintrack/token');
    setLoged(false);
    setData(null);
    setToken('');
  }, []);

  return (
    <UserContext.Provider
      value={{
        fetchUsersGetToken,
        fetchCreateUser,
        fetchError,
        token,
        loged,
        data,
        singout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
