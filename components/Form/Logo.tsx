import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Logo() {
  return (
    <Image
      style={styles.image}
      source={{
        uri: "https://res.cloudinary.com/ddfxcmxk7/image/upload/v1777343625/Gemini_Generated_Image_t88dn6t88dn6t88d-removebg-preview_qwr8sp.png",
      }}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200,
  },
});
