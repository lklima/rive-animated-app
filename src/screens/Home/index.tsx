import React, { useEffect, useState } from "react";
import { FlatList, Platform } from "react-native";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

import TabBar from "../../components/TabBar";
import Header from "./components/Header";
import HItem from "./components/HItem";
import VItem from "./components/VItem";
import SideBar from "../../components/SideBar";
import OnboardModal from "./components/OnboardModal";
import SignInModal from "./components/SignInModal";

import * as S from "./styles";

import { hItems, vItems } from "./utils";

export default function Home() {
  const contentRotateY = useSharedValue(0);
  const contentTranslateX = useSharedValue(0);
  const contentScale = useSharedValue(1);

  const [openMenu, setOpenMenu] = useState(false);
  const [openOnboardModal, setOpenOnboardModal] = useState(false);
  const [openSignModal, setOpenSignModal] = useState(false);

  useEffect(() => {
    const options = { damping: 14 };
    const translateX = Platform.OS === "ios" ? 265 : 220;

    contentRotateY.value = withSpring(openMenu ? -30 : 0, options);
    contentTranslateX.value = withSpring(openMenu ? translateX : 0, options);
    contentScale.value = withSpring(openMenu ? 0.9 : 1, options);
    contentScale.value = withSpring(openOnboardModal ? 0.92 : 1, options);
  }, [openMenu, openOnboardModal]);

  const animatedContentSyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: 207 },
      { perspective: 400 },
      { rotateY: `${contentRotateY.value}deg` },
      { translateX: -207 },
      { translateX: contentTranslateX.value },
      { scale: contentScale.value },
    ],
  }));

  return (
    <S.Container>
      <Header
        openMenu={openMenu}
        setIsOpenMenu={setOpenMenu}
        setOpenOnboardModal={setOpenOnboardModal}
      />
      <SideBar openMenu={openMenu} />
      <S.Content style={[animatedContentSyle]}>
        <S.ScrollView>
          <S.Title>Courses</S.Title>
          <FlatList
            data={vItems}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => <VItem item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ marginTop: 18, paddingRight: 24 }}
          />
          <S.SubTitle>Recent</S.SubTitle>
          {hItems.map((item) => (
            <HItem key={item.title} item={item} />
          ))}
          <S.Empty />
        </S.ScrollView>
      </S.Content>
      <TabBar openMenu={openMenu || openOnboardModal} />
      <OnboardModal
        openModal={openOnboardModal}
        openSignModal={openSignModal}
        setOpenModal={setOpenOnboardModal}
        setOpenSignModal={setOpenSignModal}
      />
      <SignInModal openModal={openSignModal} setOpenModal={setOpenSignModal} />
    </S.Container>
  );
}
