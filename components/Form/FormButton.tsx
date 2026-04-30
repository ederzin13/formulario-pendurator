import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

type FormButtonProps = {
  isFormValid?: boolean;
  submit?: object;
};

export default function FormButton({ isFormValid, submit }: FormButtonProps) {
  if (isFormValid) {
    return (
      <Pressable
        style={styles.container}
        onPress={() => {
          console.log(submit);
        }}
      >
        <Text style={styles.text}>Submit</Text>
      </Pressable>
    );
  }

  return (
    <Pressable style={[styles.container, { backgroundColor: "#888181" }]}>
      <Text style={styles.text}>Submit</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 70,
    backgroundColor: "#8d5a5a",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  text: {
    color: "white",
    fontFamily: "Sora_500Medium",
  },

  invalid: {
    backgroundColor: "#888181",
  },
});
