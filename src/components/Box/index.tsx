import { BoxContainer } from "./styles";

interface BoxProps {
  children: React.ReactNode;
}

export default function Box({ children }: BoxProps) {
  return (
    <BoxContainer>
      {children}
    </BoxContainer>
  )
}