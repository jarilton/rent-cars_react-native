import React from "react";
import {
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components";

import { BackButton } from "../../../components/BackButton";
import { Bullet } from "../../../components/Bullet";
import { InputPassword } from "../../../components/InputPassword";

import {
  Container,
  Header,
  Steps,
  Title,
  SubTitle,
  Form,
  FormTitle,
  Footer,
} from "./styles";
import { Button } from "../../../components/Button";

export function SignUpSecondStep() {
  const navigation = useNavigation();
  const theme = useTheme();

  function handleBack() {
    navigation.goBack();
  }

  return (
    <KeyboardAvoidingView behavior="position" enabled>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <Container>
          <Header>
            <BackButton onPress={handleBack} />
            <Steps>
              <Bullet active />
              <Bullet />
            </Steps>
          </Header>

          <Title>Crie sua{"\n"}conta</Title>
          <SubTitle>
            Faça seu cadastro de{"\n"}
            forma rápida e segura
          </SubTitle>

          <Form>
            <FormTitle>2. Senha</FormTitle>
            <InputPassword iconName="lock" placeholder="Senha" />
            <InputPassword iconName="lock" placeholder="Repetir senha" />
          </Form>

          <Footer>
            <Button title="Cadastrar" color={theme.colors.success} />
          </Footer>
        </Container>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
