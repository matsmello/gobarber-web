import styled from "styled-components";
import backgroundImage from "./../../assets/sign-in-background.png";
import { shade } from "polished";

export const Container = styled.div`
  height: 100vh;

  display: flex;

  align-items: stretch;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  place-content: center;
  width: 100%;
  max-width: 700px;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;
      color: #f4ede8;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      border: 0px;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      color: #321e38;
      margin-top: 16px;
      font-weight: 500;
      transition: 0.2s background-color;

      &:hover {
        background: ${shade(0.2, "#ff9000")};
      }
    }

    a {
      color: #f4ede8;
      display: block;

      margin-top: 24px;
      text-decoration: none;
      transition: 0.2s color;

      &:hover {
        color: ${shade(0.2, "#f4ede8")};
      }
    }
  }

  > a {
    color: #ff9000;
    display: flex;

    margin-top: 24px;
    text-decoration: none;
    transition: 0.2s color;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color: ${shade(0.2, "#ff9000")};
    }
  }
`;
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImage}) no-repeat;
  background-size: cover;
`;
