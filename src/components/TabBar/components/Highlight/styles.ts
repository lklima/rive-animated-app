import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const HighlightView = styled(Animated.View)`
  height: 4.2px;
  width: 20px;
  border-radius: 1px;
  background: ${({ theme }) => theme.colors.stroke};
  margin-bottom: 1px;
`;
