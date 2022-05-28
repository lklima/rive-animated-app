import React from "react";
import { ImageSourcePropType } from "react-native";

import * as S from "./styles";

interface ItemProps {
  title: string;
  subtitle: string;
  image: ImageSourcePropType;
  color: string;
}

interface Props {
  item: ItemProps;
}

export default function HItem({ item }: Props) {
  return (
    <S.Container color={item.color}>
      <S.Content>
        <S.Title>{item.title}</S.Title>
        <S.Subtitle numberOfLines={2}>{item.subtitle}</S.Subtitle>
      </S.Content>
      <S.Icon source={item.image} />
    </S.Container>
  );
}
