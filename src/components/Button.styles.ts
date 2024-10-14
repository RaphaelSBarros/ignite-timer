import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface Props {
  variant: ButtonVariant;
}

export const ButtonContainer = styled.button<Props>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.white};

`;
