import Animated from "react-native-reanimated";
import styled from "styled-components/native";

interface ButtonProps {
  selected: boolean;
}

export const Container = styled.View`
  height: 60px;
  width: 90%;
  background: ${({ theme }) => theme.colors.primaryDark};
  opacity: 0.8;
  border-radius: 22px;
  position: absolute;
  bottom: 30px;
  align-self: center;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  box-shadow: 0 20px 20px ${({ theme }) => theme.colors.bottomShadow};
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  align-items: center;
`;

export const ButtonContent = styled.View<ButtonProps>`
  height: 36px;
  width: 36px;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;

export const Highlight = styled(Animated.View)`
  height: 5px;
  width: 22px;
  border-radius: 1px;
  background: ${({ theme }) => theme.colors.stroke};
`;
