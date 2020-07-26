import React, { useCallback } from "react";
import { createContext } from "react";
import api from "./../services/api";

interface Credentials {
  password: string;
  email: string;
}

interface AuthContextData {
  name: string;
  signIn(credentials: Credentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const signIn = useCallback(async ({ email, password }): Promise<void> => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    console.log("response", response);
  }, []);

  return (
    <AuthContext.Provider value={{ name: "", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
