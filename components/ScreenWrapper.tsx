import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

type ScreenWrapperProps = {
  children: React.ReactNode;
  center?: boolean;
  padding?: number;
  gap?: number;
};

export default function ScreenWrapper({
  children,
  center,
  padding = 20,
  gap,
}: ScreenWrapperProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={[
          {
            flex: 1,
            padding,
            justifyContent: center ? "center" : "flex-start",
            alignItems: center ? "center" : "flex-start",
            gap: gap,
            backgroundColor: "#fddef6",
          },
        ]}
      >
        {children}
      </SafeAreaView>
      <StatusBar style="auto" translucent></StatusBar>
    </SafeAreaProvider>
  );
}
