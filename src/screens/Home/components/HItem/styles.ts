import styled from "styled-components/native";

interface ContainerProps {
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 90%;
  height: 110px;
  border-radius: 30px;
  margin-bottom: 20px;
  align-self: center;
  padding: 26px 30px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: ${({ color }) => color};
  elevation: 5;
`;

export const Content = styled.View`
  height: 100%;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
  font-size: 24px;
`;

export const Subtitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: white;
  font-size: 15px;
`;

export const Icon = styled.Image`
  height: 44px;
  width: 44px;
`;
