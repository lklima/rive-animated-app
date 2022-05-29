import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

interface ButtonProps {
  selected: boolean;
}

export const Container = styled(Animated.View)`
  width: 100%;
  position: absolute;
  bottom: 25px;
  align-items: center;
  align-self: center;
  justify-content: center;
  z-index: 999;
`;

export const Shadow = styled(LinearGradient).attrs({
  colors: ["rgba(255, 255,255, 0)", "rgba(255, 255,255, 1)"],
})`
  width: 100%;
  height: 150px;
  position: absolute;
  align-self: center;
  opacity: ${({ openMenu }) => (openMenu ? 0 : 1)};
`;

export const Content = styled.View`
  height: 60px;
  width: 90%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 22px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  shadow-opacity: 0.3;
  shadow-radius: 20px;
  shadow-color: ${({ theme }) => theme.colors.bottomShadow};
  shadow-offset: 0px 20px;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  align-items: center;
`;

export const ButtonContent = styled.View<ButtonProps>`
  height: 36px;
  width: 36px;
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
`;
