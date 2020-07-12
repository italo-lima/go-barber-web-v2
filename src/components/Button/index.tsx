import React, { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

// semelhante a interface, mas como não sobrescreve ou cria propriedades padrão, usa type
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? 'Carregando...' : children}
  </Container>
);

export default Button;
