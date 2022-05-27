import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Rive, { LoopMode, RiveRef } from "rive-react-native";

import { Button, ButtonContent, Container, Highlight } from "./styles";

export default function TabBar() {
  const [selected, setSelected] = useState("chat");

  const stroke1Width = useSharedValue(22);
  const stroke2Width = useSharedValue(22);
  const stroke3Width = useSharedValue(22);
  const stroke4Width = useSharedValue(22);
  const stroke5Width = useSharedValue(22);

  const chatRef = useRef<RiveRef>(null);
  const searchRef = useRef<RiveRef>(null);
  const timerRef = useRef<RiveRef>(null);
  const bellRef = useRef<RiveRef>(null);
  const userRef = useRef<RiveRef>(null);

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

  useEffect(() => {
    stroke1Width.value = withTiming(selected === "chat" ? 22 : 0);
    stroke2Width.value = withTiming(selected === "search" ? 22 : 0);
    stroke3Width.value = withTiming(selected === "timer" ? 22 : 0);
    stroke4Width.value = withTiming(selected === "bell" ? 22 : 0);
    stroke5Width.value = withTiming(selected === "user" ? 22 : 0);
  }, [selected]);

  const stroke1Style = useAnimatedStyle(() => ({
    width: stroke1Width.value,
  }));
  const stroke2Style = useAnimatedStyle(() => ({
    width: stroke2Width.value,
  }));
  const stroke3Style = useAnimatedStyle(() => ({
    width: stroke3Width.value,
  }));
  const stroke4Style = useAnimatedStyle(() => ({
    width: stroke4Width.value,
  }));
  const stroke5Style = useAnimatedStyle(() => ({
    width: stroke5Width.value,
  }));

  return (
    <Container>
      <Button onPress={() => handlePress("chat")}>
        <Highlight style={stroke1Style} />
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
        <Highlight style={stroke2Style} />
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
        <Highlight style={stroke3Style} />
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
        <Highlight style={stroke4Style} />
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
        <Highlight style={stroke5Style} />
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
    </Container>
  );
}
