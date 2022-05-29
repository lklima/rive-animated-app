import React, { useState, useRef, useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import Rive, { LoopMode, RiveRef } from "rive-react-native";
import { Ionicons } from "@expo/vector-icons";

import * as S from "./styles";
import Highlight from "./components/Highlight";

interface Props {
  openMenu: boolean;
}

export default function SideBar({ openMenu }: Props) {
  const contentTranslateY = useSharedValue(0);
  const contentOpacity = useSharedValue(0);

  const [selected, setSelected] = useState("chat");
  const [switchAtive, setSwitchAtive] = useState(false);

  const homeRef = useRef<RiveRef>(null);
  const searchRef = useRef<RiveRef>(null);
  const starRef = useRef<RiveRef>(null);
  const chatRef = useRef<RiveRef>(null);
  const timerRef = useRef<RiveRef>(null);
  const bellRef = useRef<RiveRef>(null);
  const settingsRef = useRef<RiveRef>(null);

  useEffect(() => {
    contentTranslateY.value = withSpring(openMenu ? 0 : -280, { damping: 14 });
    contentOpacity.value = withTiming(openMenu ? 1 : 0);
  }, [openMenu]);

  useEffect(() => {
    if (switchAtive) {
      settingsRef.current.play("active", LoopMode.Loop);
    } else {
      settingsRef.current.stop();
    }
  }, [switchAtive]);

  function handlePress(name: string) {
    if (name === "home") {
      homeRef.current.play("active", LoopMode.OneShot);
    } else if (name === "search") {
      searchRef.current.play("active", LoopMode.OneShot);
    } else if (name === "star") {
      starRef.current.play("active", LoopMode.OneShot);
    } else if (name === "chat") {
      chatRef.current.play("active", LoopMode.OneShot);
    } else if (name === "timer") {
      timerRef.current.play("active", LoopMode.OneShot);
    } else if (name === "bell") {
      bellRef.current.play("active", LoopMode.OneShot);
    }

    setSelected(name);
  }

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: contentOpacity.value,
    transform: [{ translateX: contentTranslateY.value }],
  }));

  return (
    <S.Container style={containerAnimatedStyle}>
      <S.Header>
        <S.UserContent>
          <Ionicons name="ios-person-outline" size={20} color="white" />
        </S.UserContent>
        <S.UserTextContent>
          <S.UserName>Lucas Lima</S.UserName>
          <S.UserRole>Developer</S.UserRole>
        </S.UserTextContent>
      </S.Header>
      <S.SectionTitle>BROWSE</S.SectionTitle>
      <S.MenuItem onPress={() => handlePress("home")}>
        <Highlight selected={selected === "home"} />
        <S.MenuIcon>
          <Rive
            ref={homeRef}
            resourceName="icons"
            stateMachineName="HOME_interactivity"
            artboardName="HOME"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>Home</S.MenuTitle>
      </S.MenuItem>
      <S.MenuItem onPress={() => handlePress("search")}>
        <Highlight selected={selected === "search"} />
        <S.MenuIcon>
          <Rive
            ref={searchRef}
            resourceName="icons"
            stateMachineName="SEARCH_interactivity"
            artboardName="SEARCH"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>Search</S.MenuTitle>
      </S.MenuItem>
      <S.MenuItem onPress={() => handlePress("star")}>
        <Highlight selected={selected === "star"} />
        <S.MenuIcon>
          <Rive
            ref={starRef}
            resourceName="icons"
            stateMachineName="STAR_Interactivity"
            artboardName="LIKE/STAR"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>Favorites</S.MenuTitle>
      </S.MenuItem>
      <S.MenuItem onPress={() => handlePress("chat")}>
        <Highlight selected={selected === "chat"} />
        <S.MenuIcon>
          <Rive
            ref={chatRef}
            resourceName="icons"
            stateMachineName="CHAT_Interactivity"
            artboardName="CHAT"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>Help</S.MenuTitle>
      </S.MenuItem>
      <S.SectionTitle>HISTORY</S.SectionTitle>
      <S.MenuItem onPress={() => handlePress("timer")}>
        <Highlight selected={selected === "timer"} />
        <S.MenuIcon>
          <Rive
            ref={timerRef}
            resourceName="icons"
            stateMachineName="TIMER_Interactivity"
            artboardName="TIMER"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>History</S.MenuTitle>
      </S.MenuItem>
      <S.MenuItem onPress={() => handlePress("bell")}>
        <Highlight selected={selected === "bell"} />
        <S.MenuIcon>
          <Rive
            ref={bellRef}
            resourceName="icons"
            stateMachineName="BELL_Interactivity"
            artboardName="BELL"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>Notifications</S.MenuTitle>
      </S.MenuItem>
      <S.Bottom>
        <S.MenuIcon>
          <Rive
            ref={settingsRef}
            resourceName="icons"
            stateMachineName="SETTINGS_Interactivity"
            artboardName="SETTINGS"
            autoplay={false}
          />
        </S.MenuIcon>
        <S.MenuTitle>Dark Mode</S.MenuTitle>
        <S.Switch value={switchAtive} onChange={() => setSwitchAtive(!switchAtive)} />
      </S.Bottom>
    </S.Container>
  );
}
