import { createContext, ReactNode, useCallback, useState } from 'react';
import { api } from '../lib/axios';

interface GetTokenSchema {
  email: string;
  password: string;
}

interface UserProviderProps {
  children: ReactNode;
}

interface UserProviderType {
  fetchUsersGetToken: (data: GetTokenSchema) => Promise<void>;
}

// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = createContext({} as UserProviderType);

export function UserProvider({ children }: UserProviderProps) {
  const [token, setToken] = useState<GetTokenSchema | null>(null);

  const fetchUsersGetToken = useCallback(
    async (data: GetTokenSchema) => {
      const { email, password } = data;

      const reponse = await api.post('/user/session', {
        email,
        password,
      });

      setToken(reponse.data.token);
      console.log(token);
    },
    [token]
  );

  return (
    <UserContext.Provider value={{ fetchUsersGetToken }}>
      {children}
    </UserContext.Provider>
  );
}
