import React, { useState, useRef, useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import Rive, { LoopMode, RiveRef } from "rive-react-native";

import Highlight from "./components/Highlight";

import { Button, ButtonContent, Container, Content, Shadow } from "./styles";

interface Props {
  openMenu: boolean;
}

export default function TabBar({ openMenu }: Props) {
  const contentTranslateY = useSharedValue(0);

  const [selected, setSelected] = useState("chat");

  const chatRef = useRef<RiveRef>(null);
  const searchRef = useRef<RiveRef>(null);
  const timerRef = useRef<RiveRef>(null);
  const bellRef = useRef<RiveRef>(null);
  const userRef = useRef<RiveRef>(null);

  useEffect(() => {
    contentTranslateY.value = withSpring(openMenu ? 100 : 0, { damping: 13 });
  }, [openMenu]);

  function handlePress(name: string) {
    if (name === "chat") {
      chatRef.current.play("active", LoopMode.OneShot);
    } else if (name === "search") {
      searchRef.current.play("active", LoopMode.OneShot);
    } else if (name === "timer") {
      timerRef.current.play("active", LoopMode.OneShot);
    } else if (name === "bell") {
      bellRef.current.play("active", LoopMode.OneShot);
    } else if (name === "user") {
      userRef.current.play("active", LoopMode.OneShot);
    }

    setSelected(name);
  }

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: contentTranslateY.value }],
  }));

  return (
    <Container style={containerAnimatedStyle}>
      <Shadow openMenu={openMenu} />
      <Content>
        <Button onPress={() => handlePress("chat")}>
          <Highlight selected={selected === "chat"} />
          <ButtonContent selected={selected === "chat"}>
            <Rive
              ref={chatRef}
              resourceName="icons"
              stateMachineName="CHAT_Interactivity"
              artboardName="CHAT"
              autoplay={false}
            />
          </ButtonContent>
        </Button>
        <Button onPress={() => handlePress("search")}>
          <Highlight selected={selected === "search"} />
          <ButtonContent selected={selected === "search"}>
            <Rive
              ref={searchRef}
              resourceName="icons"
              stateMachineName="SEARCH_Interactivity"
              artboardName="SEARCH"
              autoplay={false}
            />
          </ButtonContent>
        </Button>
        <Button onPress={() => handlePress("timer")}>
          <Highlight selected={selected === "timer"} />
          <ButtonContent selected={selected === "timer"}>
            <Rive
              ref={timerRef}
              resourceName="icons"
              stateMachineName="TIMER_Interactivity"
              artboardName="TIMER"
              autoplay={false}
            />
          </ButtonContent>
        </Button>
        <Button onPress={() => handlePress("bell")}>
          <Highlight selected={selected === "bell"} />
          <ButtonContent selected={selected === "bell"}>
            <Rive
              ref={bellRef}
              resourceName="icons"
              stateMachineName="BELL_Interactivity"
              artboardName="BELL"
              autoplay={false}
            />
          </ButtonContent>
        </Button>
        <Button onPress={() => handlePress("user")}>
          <Highlight selected={selected === "user"} />
          <ButtonContent selected={selected === "user"}>
            <Rive
              ref={userRef}
              resourceName="icons"
              stateMachineName="USER_Interactivity"
              artboardName="USER"
              autoplay={false}
            />
          </ButtonContent>
        </Button>
      </Content>
    </Container>
  );
}
