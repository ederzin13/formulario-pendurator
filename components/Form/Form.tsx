import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Logo from "./Logo";
import FormInput from "./FormInput";
import DropdownComp from "./DropdownComp";

export default function Form() {
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Pendurator</Text>
      <DropdownComp></DropdownComp>
      <FormInput label="Debt" placeholder="R$"></FormInput>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },

  title: {
    fontSize: 25,
    fontWeight: "600",
    fontFamily: "Sora_700Bold",
  },
});
