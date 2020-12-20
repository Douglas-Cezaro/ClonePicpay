import React from "react";
import { View, StatusBar } from "react-native";

export default function StatusBarComponent({ style, color }) {
  console.log(color);
  return <StatusBar hidden={false} barStyle={style} backgroundColor={color} />;
}
