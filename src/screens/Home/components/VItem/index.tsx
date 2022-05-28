import React from "react";
import { ImageSourcePropType } from "react-native";

import * as S from "./styles";

import avatars from "../../../../assets/images/avatars.png";

interface ItemProps {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  caption: string;
  colors: string[];
}

interface Props {
  item: ItemProps;
}

export default function VItem({ item }: Props) {
  return (
    <S.Container color={item.colors[1]}>
      <S.Gradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={item.colors}>
        <S.Content>
          <S.Header>
            <S.Title>{item.title}</S.Title>
            <S.Icon source={item.image} />
          </S.Header>
          <S.Subtitle numberOfLines={2}>{item.subtitle}</S.Subtitle>
          <S.Caption>{item.caption}</S.Caption>
        </S.Content>
        <S.Avatars source={avatars} />
      </S.Gradient>
    </S.Container>
  );
}
