import React, { useEffect } from "react";
import { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

import { HighlightView } from "./styles";

interface Props {
  selected: boolean;
}

export default function Highlight({ selected }: Props) {
  const strokeWidth = useSharedValue(0);

  useEffect(() => {
    strokeWidth.value = withTiming(selected ? 100 : 0);
  }, [selected]);

  const strokeStyle = useAnimatedStyle(() => ({
    width: `${strokeWidth.value}%`,
  }));

  return <HighlightView style={strokeStyle} />;
}
