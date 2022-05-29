import React, { useRef } from "react";
import Rive, { RiveRef } from "rive-react-native";
import { Ionicons } from "@expo/vector-icons";

import { Button, Container, MenuButton } from "./styles";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

interface Props {
  openMenu: boolean;
  setIsOpenMenu(openMenu: boolean): void;
  setOpenOnboardModal(openMenu: boolean): void;
}

export default function Header({ openMenu, setIsOpenMenu, setOpenOnboardModal }: Props) {
  const containerTranlateX = useSharedValue(0);

  const menuRef = useRef<RiveRef>(null);

  function handleOpenMenu() {
    menuRef.current.play(openMenu ? "close" : "open");
    containerTranlateX.value = withSpring(openMenu ? 0 : 230, { damping: 14 });
    setIsOpenMenu(!openMenu);
  }

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: containerTranlateX.value }],
  }));

  return (
    <Container style={containerAnimatedStyle}>
      <MenuButton onPress={handleOpenMenu}>
        <Rive
          ref={menuRef}
          resourceName="menu_button"
          stateMachineName="State Machine"
          autoplay={false}
        />
      </MenuButton>
      <Button onPress={() => setOpenOnboardModal(true)}>
        <Ionicons name="ios-person-outline" size={20} />
      </Button>
    </Container>
  );
}
