import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled(Animated.View)`
  width: 290px;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  padding-top: 65px;
  padding-left: 18px;
`;

export const Header = styled.View`
  flex-direction: row;
  width: 100%;
`;

export const UserContent = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 30px;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
`;

export const UserTextContent = styled.View`
  margin-left: 8px;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 15px;
  color: white;
  margin-bottom: 3px;
`;

export const UserRole = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  color: white;
  opacity: 0.7;
`;

export const SectionTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 15px;
  color: white;
  opacity: 0.7;
  margin-bottom: 7px;
  margin-top: 65px;
  margin-left: 18px;
`;

export const MenuItem = styled.TouchableOpacity.attrs({ activeOpacity: 0.9 })`
  flex-direction: row;
  width: 100%;
  padding: 12px 0;
  align-items: center;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.primary};
`;

export const MenuIcon = styled.View`
  height: 32px;
  width: 32px;
  margin-left: 12px;
  margin-right: 14px;
  opacity: 0.6;
`;

export const MenuTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 17px;
  color: white;
`;

export const Bottom = styled.View`
  flex-direction: row;
  width: 100%;
  padding: 12px 0;
  margin-left: 30px;
  align-items: center;
  position: absolute;
  bottom: 40px;
`;

export const Switch = styled.Switch`
  position: absolute;
  right: 0;
`;
