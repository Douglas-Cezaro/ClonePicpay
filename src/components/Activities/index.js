import React from "react";
import { Feather, MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  DateLabel,
  Actions,
  Option,
  OptionLabel,
} from "./styles";

import avatar from "../../../assets/avatar.png";

export default function Activities() {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@douglascezaro</Bold>
          </Description>
        </CardHeader>
        <CardBody>
          <UserName>Douglas Cezaro</UserName>
        </CardBody>
        <CardFooter>
          <Details>
            <Value>R$ 20,00</Value>
            <Divider />
            <Feather name="lock" color="#FFFFFF" size={14} />
            <Date>há 2 horas atrás</Date>
          </Details>
          <Actions>
            <Option>
              <MaterialCommunityIcons
                name="comment-outline"
                size={14}
                color="#FFFFFF"
              />
              <OptionLabel>0</OptionLabel>
            </Option>
            <Option>
              <AntDesign name="hearto" size={14} color="#FFFFFF" />
              <OptionLabel>10</OptionLabel>
            </Option>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
}
