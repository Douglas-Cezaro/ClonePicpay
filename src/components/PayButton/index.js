import React from "react";
import { Text } from "react-native";
import { Button, Label } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native";

export default function PayButton({ onPress, focused }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Button
        colors={focused ? ["#FFFFFF", "#CCCCCC"] : ["#00fc6c", "#00ac4a"]}
        start={[1, 0.2]}
      >
        <MaterialIcons
          name="attach-money"
          size={30}
          color={focused ? "#000000" : "#FFFFFf"}
        />
        <Label focused={focused}>Pagar</Label>
      </Button>
    </TouchableWithoutFeedback>
  );
}
