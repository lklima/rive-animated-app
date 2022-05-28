import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from "react-native-reanimated";
import { withAnchorPoint } from "react-native-anchor-point";

import TabBar from "../../components/TabBar";
import Header from "./components/Header";
import HItem from "./components/HItem";
import VItem from "./components/VItem";

import * as S from "./styles";
import { hItems, vItems } from "./utils";

export default function Home() {
  const contentRotateY = useSharedValue(0);
  const contentTranslateX = useSharedValue(0);
  const contentScale = useSharedValue(0);

  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    contentRotateY.value = withSpring(openMenu ? -30 : 0);
    contentTranslateX.value = withSpring(openMenu ? 265 : 0);
    contentScale.value = withSpring(openMenu ? 0.9 : 1);
  }, [openMenu]);

  const animatedContentSyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: 207 },
      { perspective: 400 },
      { rotateY: `${contentRotateY.value}deg` },
      { translateX: -207 },
      { translateX: contentTranslateX.value },
    ],
  }));

  return (
    <S.Container>
      <Header openMenu={openMenu} setIsOpenMenu={setOpenMenu} />
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
    </S.Container>
  );
}
