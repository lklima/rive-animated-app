import { LinearGradient } from "expo-linear-gradient";
import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  shadow-opacity: 0.6;
  shadow-radius: 8px;
  shadow-color: ${({ color }) => color};
  shadow-offset: 0px 10px;
  background: white;
  border-radius: 30px;
  margin-left: 20px;
  margin-bottom: 22px;
  elevation: 5;
`;

export const Gradient = styled(LinearGradient)`
  width: 260px;
  height: 309px;
  border-radius: 30px;

  padding: 30px;
  justify-content: space-between;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 15px;
  margin-top: 7px;
`;

export const Caption = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  color: ${({ theme }) => theme.colors.subtitle};
  font-size: 13px;
  text-transform: uppercase;
  margin-top: 8px;
`;

export const Icon = styled.Image`
  height: 44px;
  width: 44px;
`;

export const Avatars = styled.Image``;
