import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "./components/ScreenWrapper";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  });

  if (loading) {
    return (
      <ScreenWrapper center gap={20}>
        <Text>Carregando...</Text>
        <ActivityIndicator></ActivityIndicator>
      </ScreenWrapper>
    );
  }

  return (
    <ScreenWrapper center>
      <Text>TELONA</Text>
    </ScreenWrapper>
  );
}
