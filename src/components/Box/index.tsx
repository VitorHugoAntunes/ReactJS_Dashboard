import React, { HTMLAttributes } from 'react';
import { BoxContainer } from "./styles";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export default function Box({ children, ...rest }: BoxProps) {
  return (
    <BoxContainer {...rest}>
      {children}
    </BoxContainer>
  )
}