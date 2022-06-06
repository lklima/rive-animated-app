import { Platform } from "react-native";
import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.primaryDark};
  justify-content: center;
`;

export const Content = styled(Animated.View)`
  flex: 1;
  background: ${({ theme }) => theme.colors.background};
  border-radius: ${Platform.OS === "ios" ? 30 : 0}px;
`;

export const ScrollView = styled.ScrollView`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 34px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: 24px;
  margin-top: 116px;
`;

export const SubTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  margin-left: 24px;
  margin-top: 18px;
  margin-bottom: 10px;
`;

export const Empty = styled.View`
  height: 100px;
`;
