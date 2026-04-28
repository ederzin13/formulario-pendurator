import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

type FormInputProps = {
  label: string;
  placeholder?: string;
  error?: boolean;
};

export default function FormInput({
  label,
  error,
  placeholder,
}: FormInputProps) {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.container}>
        <TextInput placeholder={placeholder}></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: "#6e0649",
    borderRadius: 5,
  },

  label: {
    fontSize: 13,
    fontFamily: "Sora_500Medium",
  },
});
