import React, { useCallback } from "react";
import { Container } from "./styles";
import { ToastMessage } from "./../../hooks/toast";

import Toast from "./Toast";
interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(({ id, type, description, title }) => (
        <Toast key={id} message={{ id, type, description, title }} />
      ))}
    </Container>
  );
};

export default ToastContainer;
