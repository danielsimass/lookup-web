import React, { createContext, useState } from 'react';

interface IUserContext {
    user: any;
    setUser: (user: any) => void;
    handleSetUser: (dataUser: any) => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: any) => {
  const [user, setUser] = useState(false);

  const handleSetUser = (dataUser: any) => {
    setUser(dataUser)
  }
//   function login({email, password}: {email: string, password: string}) {
//     // lógica para realizar o login do usuário
//     setIsAuthenticated(true);
//   }

  return (
    <UserContext.Provider value={{ user, setUser, handleSetUser }}>
      {children}
    </UserContext.Provider>
  );
};
