import React, { useRef } from "react";
import Rive, { RiveRef } from "rive-react-native";
import { Ionicons } from "@expo/vector-icons";

import { Button, Container, MenuButton } from "./styles";

interface Props {
  openMenu: boolean;
  setIsOpenMenu(openMenu: boolean): void;
}

export default function Header({ openMenu, setIsOpenMenu }: Props) {
  const menuRef = useRef<RiveRef>(null);

  function handleOpenMenu() {
    if (openMenu) {
      menuRef.current.play("close");
    } else {
      menuRef.current.play("open");
    }

    setIsOpenMenu(!openMenu);
  }

  return (
    <Container>
      <MenuButton onPress={handleOpenMenu}>
        <Rive
          ref={menuRef}
          resourceName="menu_button"
          stateMachineName="State Machine"
          autoplay={false}
        />
      </MenuButton>
      <Button>
        <Ionicons name="ios-person-outline" size={20} />
      </Button>
    </Container>
  );
}
