import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";

import TabBar from "../../components/TabBar";
import Header from "./components/Header";
import HItem from "./components/HItem";
import VItem from "./components/VItem";
import SideBar from "../../components/SideBar";

import * as S from "./styles";

import { hItems, vItems } from "./utils";
import OnboardModal from "./components/OnboardModal";

export default function Home() {
  const contentRotateY = useSharedValue(0);
  const contentTranslateX = useSharedValue(0);
  const contentScale = useSharedValue(0);

  const [openMenu, setOpenMenu] = useState(false);
  const [openOnboardModal, setOpenOnboardModal] = useState(false);

  useEffect(() => {
    const options = { damping: 14 };

    contentRotateY.value = withSpring(openMenu ? -30 : 0, options);
    contentTranslateX.value = withSpring(openMenu ? 265 : 0, options);
    contentScale.value = withSpring(openMenu ? 0.9 : 1, options);
  }, [openMenu]);

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
      <TabBar openMenu={openMenu} />
      <OnboardModal openModal={openOnboardModal} setOpenModal={setOpenOnboardModal} />
    </S.Container>
  );
}
