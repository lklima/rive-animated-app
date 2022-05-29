import Animated from "react-native-reanimated";
import styled from "styled-components/native";
import { BlurView } from "expo-blur";

export const Container = styled(Animated.View)`
  width: 100%;
  height: 656px;
  top: 90px;
  position: absolute;
  align-items: center;
  z-index: 9999;
  shadow-opacity: 1;
  shadow-radius: 200px;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  shadow-offset: 0px 0px;
`;

export const Content = styled.View`
  width: 368px;
  height: 100%;
  align-items: center;
  border-radius: 20px;
  padding: 30px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.7);
`;

export const Blur = styled(BlurView)`
  width: 368px;
  height: 656px;
  position: absolute;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 34px;
`;

export const Desc = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 17px;
  width: 95%;
  margin-top: 20px;
  margin-bottom: 24px;
  opacity: 0.5;
  text-align: center;
`;

export const Row = styled.View`
  width: 100%;
  margin-bottom: 24px;
`;

export const InputLabel = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 15px;
  margin-bottom: 8px;
  opacity: 0.5;
`;

export const InputView = styled.View`
  flex-direction: row;
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background: white;
  border: solid 1px #ddd;
  align-items: center;
  padding-left: 10px;
`;

export const InputIcon = styled.Image`
  width: 36px;
  height: 36px;
  margin-right: 10px;
`;

export const Input = styled.TextInput`
  height: 100%;
  width: 100%;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: 56px;
  background: ${({ theme }) => theme.colors.pink};
  border-radius: 25px;
  border-top-left-radius: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  shadow-opacity: 0.5;
  shadow-radius: 15px;
  shadow-color: ${({ theme }) => theme.colors.pink};
  shadow-offset: 0px 10px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 17px;
  color: white;
  margin-left: 9px;
`;

export const DivisorContent = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 24px 0;
`;

export const Divisor = styled.View`
  flex: 1;
  height: 0.5px;
  background: gray;
`;

export const DivisorText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.semiBold};
  font-size: 17px;
  opacity: 0.3;
  margin: 0 9px;
`;

export const DescText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 13px;
  opacity: 0.3;
  margin: 0 9px;
  margin-bottom: 24px;
`;

export const LoginContent = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const LoginIcon = styled.Image`
  width: 64px;
  height: 64px;
`;

export const CloseButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  width: 36px;
  height: 36px;
  background: white;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
  bottom: -17px;
  z-index: 999;
  position: absolute;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  shadow-color: ${({ theme }) => theme.colors.shadow};
  shadow-offset: 0px 3px;
`;

export const AlertContent = styled.View`
  height: 100px;
  width: 100px;
  top: 328px;
  position: absolute;
`;

export const ConfettiContent = styled.View`
  height: 368px;
  width: 368px;
  top: 150px;
  position: absolute;
  transform: scale(3);
`;
