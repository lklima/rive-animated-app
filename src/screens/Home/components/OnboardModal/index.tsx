import React, { useEffect, useRef } from "react";
import Rive, { RiveRef } from "rive-react-native";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

import spline from "../../../../assets/images/spline.png";

interface Props {
  openSignModal: boolean;
  openModal: boolean;
  setOpenModal(openMenu: boolean): void;
  setOpenSignModal(openMenu: boolean): void;
}

export default function OnboardModal({
  openModal,
  openSignModal,
  setOpenModal,
  setOpenSignModal,
}: Props) {
  const containerTranlateY = useSharedValue(0);
  const contentBottom = useSharedValue(0);

  const buttonRef = useRef<RiveRef>(null);

  function handleStart() {
    buttonRef.current.play("active");
  }

  useEffect(() => {
    containerTranlateY.value = withSpring(openModal ? 0 : -900, { damping: 17 });
  }, [openModal]);

  useEffect(() => {
    contentBottom.value = withSpring(openSignModal ? 100 : 0, { damping: 17 });
  }, [openSignModal]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: containerTranlateY.value }],
  }));

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    bottom: contentBottom.value,
  }));

  return (
    <S.Container style={containerAnimatedStyle}>
      <S.InnerContent style={contentAnimatedStyle}>
        <S.Shape>
          <Rive resourceName="shapes" style={{ zIndex: 9, opacity: 0.5 }} />
          <S.Spline resizeMode="contain" source={spline} blurRadius={30} />
        </S.Shape>
        <S.Content intensity={50} tint="light">
          <S.Title>
            Learn{"\n"}design{"\n"}& code
          </S.Title>
          <S.Desc>
            Don’t skip design. Learn design and code, by building real apps with React and
            Swift. Complete courses about the best tools.
          </S.Desc>
          <S.Button onPress={() => setOpenModal(false)}>
            <AntDesign name="close" size={24} color="white" />
          </S.Button>
          <S.Bottom>
            <S.StartButton onPress={handleStart}>
              <Rive
                ref={buttonRef}
                resourceName="button"
                autoplay={false}
                style={{ marginLeft: -55 }}
                onStop={() => setOpenSignModal(true)}
              />
              <S.StartButtonContent>
                <AntDesign name="arrowright" size={22} />
                <S.StartButtonText>Start Course</S.StartButtonText>
              </S.StartButtonContent>
            </S.StartButton>
            <S.Info>
              Purchase includes access to 30+ courses, 240+ premium tutorials, 120+ hours
              of videos, source files and certificates.
            </S.Info>
          </S.Bottom>
        </S.Content>
      </S.InnerContent>
    </S.Container>
  );
}
