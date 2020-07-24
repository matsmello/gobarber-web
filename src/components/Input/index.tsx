import React, { InputHTMLAttributes, useRef, useEffect, useState, useCallback } from 'react'
import {Container} from './styles'
import {IconBaseProps} from 'react-icons';
import {useField} from '@unform/core';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({name, icon: Icon, ...props}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const {fieldName, defaultValue, error, registerField} = useField(name);

  const [isFilled, setIsFilled] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false)

    setIsFilled(!!inputRef.current?.value)
  }, [])

  const handleInputFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, registerField])

  return <Container isErrored={!!error} isFilled={isFilled} isFocused={isFocused}>
     {Icon && <Icon size={20} />}
      <input
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        defaultValue={defaultValue}
        ref={inputRef} {...props}
      />

      {error}
    </Container>
}

export default Input