import React from "react";
import { Container, Toast } from "./styles";
import { FiAlertCircle, FiXCircle } from "react-icons/fi";
import { ToastMessage } from "./../../hooks/toast";

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(({ id, type, description, title }) => (
        <Toast key={id} type={type} hasDescription={!!description}>
          <FiAlertCircle size={18} />

          <div>
            <strong>{title}</strong>
            {description && <p>{description}</p>}
          </div>

          <button>
            <FiXCircle size={18} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
