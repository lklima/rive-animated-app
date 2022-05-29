import React, { useEffect, useRef, useState } from "react";
import Rive, { RiveRef } from "rive-react-native";
import { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";

import email from "../../../../assets/icons/email.png";
import lock from "../../../../assets/icons/lock.png";
import emailBlack from "../../../../assets/icons/emailBlack.png";
import apple from "../../../../assets/icons/apple.png";
import google from "../../../../assets/icons/google.png";

interface Props {
  openModal: boolean;
  setOpenModal(openMenu: boolean): void;
}

export default function SignInModal({ openModal, setOpenModal }: Props) {
  const containerTranlateY = useSharedValue(0);

  const [emailValue, setEmailValue] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const checRef = useRef<RiveRef>(null);
  const confettiRef = useRef<RiveRef>(null);

  function handleSend() {
    setShowAlert(true);

    if (emailValue) {
      setTimeout(() => checRef.current.fireState("State Machine 1", "Check"), 1000);
      setTimeout(() => {
        setShowAlert(false);
        setShowConfetti(true);
      }, 3500);
      setTimeout(
        () => confettiRef.current.fireState("State Machine 1", "Trigger explosion"),
        4000
      );
      setTimeout(() => {
        setShowConfetti(false);
        setEmailValue("");
        setOpenModal(false);
      }, 5500);
    } else {
      setTimeout(() => checRef.current.fireState("State Machine 1", "Error"), 2000);
      setTimeout(() => setShowAlert(false), 4000);
    }
  }

  useEffect(() => {
    containerTranlateY.value = withSpring(openModal ? 0 : -900, { damping: 17 });
  }, [openModal]);

  const containerAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: containerTranlateY.value }],
  }));

  return (
    <S.Container style={containerAnimatedStyle}>
      <S.Content>
        <S.Blur intensity={60} tint="light" />
        <S.Title>Sign in</S.Title>
        <S.Desc>
          Access to 240+ hours of content. Learn design and code, by building real apps
          with React and Swift.
        </S.Desc>
        <S.Row>
          <S.InputLabel>Email</S.InputLabel>
          <S.InputView>
            <S.InputIcon source={email} />
            <S.Input value={emailValue} onChangeText={setEmailValue} />
          </S.InputView>
        </S.Row>
        <S.Row>
          <S.InputLabel>Password</S.InputLabel>
          <S.InputView>
            <S.InputIcon source={lock} />
            <S.Input />
          </S.InputView>
        </S.Row>
        <S.Button onPress={handleSend}>
          <AntDesign name="arrowright" size={22} color="#DF2D33" />
          <S.ButtonText>Sign in</S.ButtonText>
        </S.Button>
        <S.DivisorContent>
          <S.Divisor />
          <S.DivisorText>OR</S.DivisorText>
          <S.Divisor />
        </S.DivisorContent>
        <S.DescText>Sign up with Email, Apple, Google</S.DescText>
        <S.LoginContent>
          <S.LoginIcon resizeMode="contain" source={emailBlack} />
          <S.LoginIcon resizeMode="contain" source={apple} />
          <S.LoginIcon resizeMode="contain" source={google} />
        </S.LoginContent>
        {showAlert && (
          <S.AlertContent>
            <Rive ref={checRef} resourceName="check" stateMachineName="State Machine 1" />
          </S.AlertContent>
        )}
      </S.Content>
      <S.CloseButton onPress={() => setOpenModal(false)}>
        <AntDesign name="close" size={20} />
      </S.CloseButton>
      {showConfetti && (
        <S.ConfettiContent>
          <Rive
            ref={confettiRef}
            resourceName="confetti"
            stateMachineName="State Machine 1"
            autoplay
          />
        </S.ConfettiContent>
      )}
    </S.Container>
  );
}
