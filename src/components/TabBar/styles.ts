import styled from "styled-components/native";

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.View`
  height: 60px;
  width: 90%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 22px;
  position: absolute;
  bottom: 30px;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 20px 20px 20px white;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  align-items: center;
`;

export const ButtonContent = styled.View<ButtonProps>`
  height: 36px;
  width: 36px;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;
