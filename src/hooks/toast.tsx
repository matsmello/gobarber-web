import React, { createContext, useCallback, useContext, useState } from "react";
import ToastContainer from "./../components/ToastContainer";
import { uuid } from "uuidv4";
interface ToastContextData {
  addToast(message: Omit<ToastMessage, "id">): void;
  removeToast(): void;
}

export interface ToastMessage {
  id: string;
  type?: "success" | "error" | "info";
  title: string;
  description?: string;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const addToast = useCallback(
    ({ title, description, type }: Omit<ToastMessage, "id">): void => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
      };
      console.log(toast);
      setMessages((state) => [...state, toast]);
    },
    []
  );

  const removeToast = useCallback(() => {
    console.log("");
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within an ToastProvider");
  }

  return context;
}

export { useToast, ToastProvider };
