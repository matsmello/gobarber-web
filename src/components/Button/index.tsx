import React, {ButtonHTMLAttributes} from 'react'
import { Container } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = (props) => {
  return <Container><button {...props}>enviar</button></Container>
}

export default Button