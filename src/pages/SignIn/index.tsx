import React, { useRef, useCallback, useContext } from "react";
import { Container, Content, Background, AnimationContainer } from "./styles";
import logoImg from "./../../assets/logo.svg";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";
import Input from "./../../components/Input";
import Button from "./../../components/Button";
import { Form } from "@unform/web";
import { FormHandles } from "@unform/core";
import * as Yup from "yup";
import getValidationErrors from "./../../utils/getValidationsErrors";
import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";
import { Link, useHistory } from "react-router-dom";

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn, user } = useAuth();
  const { addToast } = useToast();
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: SignInFormData): Promise<void> => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object({
          email: Yup.string()
            .required("E-mail obrigatório")
            .email("Digite um e-mail válido"),
          password: Yup.string().required("Senha obrigatória"),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        history.push('/dashboard')
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);

          return;
        }
        addToast({
          type: "error",
          title: "Error",
          description: "Ocorreu um erro na autenticação.",
        });
      }
    },
    [addToast, history, signIn]
  );

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />
          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input
              icon={FiLock}
              name="password"
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Entrar</Button>
            <a href="forgot">Esqueci minha senha</a>
          </Form>
          <Link to="/signup">
            <FiLogIn />
            Criar conta
          </Link>
        </AnimationContainer>
      </Content>

      <Background />
    </Container>
  );
};

export default SignIn;
