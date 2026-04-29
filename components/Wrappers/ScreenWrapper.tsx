import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";

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
			// style={[
			// 	{
			// 		flex: 1,
			// 		padding,
			// 		justifyContent: center ? "center" : "flex-start",
			// 		alignItems: center ? "center" : "flex-start",
			// 		gap: gap,
			// 		backgroundColor: "#fff6fd",
			// 	},
			// ]}
			>
				<KeyboardAvoidingView
					// style={{ flex: 1 }}
					behavior={Platform.OS === "ios" ? "padding" : "height"}
				>
					<ScrollView>
						<View>{children}</View>
					</ScrollView>
				</KeyboardAvoidingView>
			</SafeAreaView>
			<StatusBar style="auto" translucent></StatusBar>
		</SafeAreaProvider>
	);
}
