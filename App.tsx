import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "./components/Wrappers/ScreenWrapper";
import { useEffect, useState } from "react";
import Form from "./components/Form/Form";
import { Sora_500Medium, Sora_700Bold } from "@expo-google-fonts/sora";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import FullScreen from "./components/Wrappers/FullScreen";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [loaded, error] = useFonts({
		Sora_500Medium,
		Sora_700Bold,
	});

	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	useEffect(() => {
		if (loading) {
			setTimeout(() => {
				setLoading(false);
			}, 2000);
		}
	});

	if (loading) {
		return (
			<FullScreen>
				<Text>Loading...</Text>
				<ActivityIndicator></ActivityIndicator>
			</FullScreen>
		);
	}

	return (
		<ScreenWrapper center gap={20}>
			<Form></Form>
		</ScreenWrapper>
	);
}
