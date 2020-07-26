import React, { useCallback, useState } from "react";
import { createContext } from "react";
import api from "./../services/api";

interface Credentials {
  password: string;
  email: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  name: string;
  signIn(credentials: Credentials): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@GoBarber:token");
    const user = localStorage.getItem("@GoBarber:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }): Promise<void> => {
    const response = await api.post("sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@GoBarber:token", token);
    localStorage.setItem("@GoBarber:user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ name: "", signIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };