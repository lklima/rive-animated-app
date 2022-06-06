import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";
import { Dimensions, Platform } from "react-native";

const { height } = Dimensions.get("screen");

export const Container = styled(Animated.View)`
  width: 100%;
  height: ${height - 45}px;
  top: 0;
  position: absolute;
  background: white;
  border-radius: ${Platform.OS === "ios" ? 40 : 0}px;
  z-index: 999;
  overflow: hidden;
`;

export const InnerContent = styled(Animated.View)`
  flex: 1;
  height: ${height - 45}px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 40px;
  position: absolute;
  bottom: 0;
`;

export const Shape = styled.View`
  width: 100%;
  height: 100%;
  background: white;
  position: absolute;
  z-index: 999;
`;

export const Spline = styled.Image`
  width: 700px;
  height: 700px;
  position: absolute;
  bottom: -40px;
  left: 50px;
`;

export const Content = styled(BlurView)`
  width: 100%;
  height: 100%;
  padding-left: 40px;
  z-index: 9999;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 60px;
  margin-top: 132px;
  line-height: 70px;
`;

export const Desc = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 17px;
  width: 70%;
  margin-top: 20px;
  opacity: 0.7;
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  width: 36px;
  height: 36px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  background: black;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  shadow-offset: 0px 3px;
  top: 64px;
  right: 23px;
  position: absolute;
`;

export const Bottom = styled.View`
  position: absolute;
  bottom: 30px;
  left: 40px;
  justify-content: flex-end;
`;

export const StartButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.8 })`
  width: 300px;
  height: 64px;
  shadow-opacity: 0.3;
  shadow-radius: 10px;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  shadow-offset: 0px 10px;
`;

export const StartButtonContent = styled.View`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 300px;
  height: 64px;
  align-items: center;
  flex-direction: row;
  padding-left: 50px;
  padding-top: 10px;
`;

export const StartButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 17px;
  margin-left: 10px;
`;

export const Info = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 12px;
  width: 45%;
  margin-top: 20px;
  opacity: 0.7;
`;
