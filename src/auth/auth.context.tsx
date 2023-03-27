import axios from 'axios';
import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api_url } from '../common/constants';
import { RoleTypeEnum } from '../common/enums/roleType.enum';


type LoginResponse = {
  success: boolean;
  message: string;
  user: {
    name: string;
    email: string;
    password: string;
    companyId?: number;
    supplierId?: number
    type: RoleTypeEnum;
    company: any;
    supplier: any
  }
};

type AuthContextType = {
  isAuthenticated: boolean;
  login: ({email, password}:{ email: string, password: string }) => Promise<LoginResponse>;
  role: RoleTypeEnum;
};

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: any)  => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [role, setRole] = useState<RoleTypeEnum>('' as RoleTypeEnum);

  async function login({email, password}: {email: string, password: string}) {
    try {
      const response = await axios.post(`${api_url}/users/login`, {email, password})
      if (response.data.success) {
        if (response.data.user.type) {
          const userRole = response.data.user.type as RoleTypeEnum
          setRole(RoleTypeEnum[userRole])
        }
        console.log(response.data)
        toast.success(response.data.message)
        setIsAuthenticated(true);
        console.log(response.data)
        return response.data
      }
    } catch (error) {
      console.log(error)
        toast.error("Usuário ou senha inválidos.")
        // return false;
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, role }}>
      {children}
    </AuthContext.Provider>
  );
};
