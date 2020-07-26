import React, { useCallback } from "react";
import { Container } from "./styles";
import { ToastMessage } from "./../../hooks/toast";
import { useTransition } from "react-spring";

import Toast from "./Toast";
interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    (message) => message.id,
    {
      from: { right: "-120%" },
      enter: { right: "0%" },
      leave: { right: "-120%" },
    }
  );
  return (
    <Container>
      {messagesWithTransitions.map(({ item, key, props }) => (
        <Toast
          key={key}
          message={{
            id: key,
            type: item.type,
            description: item.description,
            title: item.title,
          }}
          style={props}
        />
      ))}
    </Container>
  );
};

export default ToastContainer;
