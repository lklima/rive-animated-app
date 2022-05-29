import Animated from "react-native-reanimated";
import styled from "styled-components/native";

export const HighlightView = styled(Animated.View)`
  height: 52px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.highlight};
  position: absolute;
`;
