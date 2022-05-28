import React, { useState } from "react";
import { FlatList } from "react-native";

import TabBar from "../../components/TabBar";
import Header from "./components/Header";
import HItem from "./components/HItem";
import VItem from "./components/VItem";

import * as S from "./styles";
import { hItems, vItems } from "./utils";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <S.Container>
      <Header openMenu={openMenu} setIsOpenMenu={setOpenMenu} />
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
      <TabBar />
    </S.Container>
  );
}
