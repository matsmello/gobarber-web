import React, { useCallback } from "react";
import { Container, Content, Background } from "./styles";
import logoImg from "./../../assets/logo.svg";
import { FiUser, FiArrowLeft, FiMail, FiLock } from "react-icons/fi";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import { Form } from "@unform/web";
import * as Yup from "yup";

const SignUp: React.FC = () => {
  const handleSubmit = useCallback(async (data: object): Promise<void> => {
    try {
      const schema = Yup.object({
        name: Yup.string().required("Nome obrigatório"),
        email: Yup.string()
          .required("E-mail obrigatório")
          .email("Digite um e-mail válido"),
        password: Yup.string().min(6, "Mínimo 6 dígitos"),
      });

      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <Container>
      <Background />

      <Content>
        <img src={logoImg} alt="GoBarber" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input icon={FiUser} name="name" placeholder="Nome" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input
            icon={FiLock}
            name="password"
            type="password"
            placeholder="Senha"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>
        <a href="">
          <FiArrowLeft />
          Voltar para logon
        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
