import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  padding: 0 24px;
  top: 54px;
  position: absolute;
  flex-direction: row;
  justify-content: space-between;
  z-index: 99;
`;

export const MenuButton = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 5px rgba(74, 83, 103, 0.2);
`;

export const Button = styled.TouchableOpacity.attrs({ activeOpacity: 0.5 })`
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
  background: white;
  box-shadow: 0 5px 5px rgba(74, 83, 103, 0.2);
`;
