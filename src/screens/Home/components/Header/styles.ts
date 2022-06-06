import { Platform } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  width: 100%;
  padding: 0 24px;
  top: 68px;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  z-index: 99;
`;

export const MenuButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  width: 40px;
  height: 40px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 5px rgba(74, 83, 103, 0.2);
  elevation: 5;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 5px rgba(74, 83, 103, 0.2);
  elevation: 5;
`;
