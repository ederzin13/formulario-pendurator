import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";

export default function FormButton() {
	return (
		<Pressable style={styles.container}>
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
});
