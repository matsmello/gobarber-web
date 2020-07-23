import React, {ButtonHTMLAttributes} from 'react'
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = () => {
  return <Container><button>enviar</button></Container>
}

export default Button