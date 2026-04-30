import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";

type SwitchCompProps = {
  onToggle?: (value: boolean) => void;
};

export default function SwitchComp({ onToggle }: SwitchCompProps) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    const newValue = !isEnabled;
    setIsEnabled(newValue);

    if (onToggle) onToggle(newValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Remind me to charge him/her</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#6e0649" }}
        thumbColor={isEnabled ? "#888181" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },

  text: {
    fontFamily: "Sora_500Medium",
    fontSize: 11,
  },
});
