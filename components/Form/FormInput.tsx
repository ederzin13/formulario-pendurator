import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";

type FormInputProps = {
	label: string;
	placeholder?: string;
	error?: boolean;
	value: string;
	keyboardType?: "number-pad" | "default";
	onChangeText: (text: string) => void;
};

export default function FormInput({
	label,
	placeholder,
	error,
	value,
	keyboardType = "default",
	onChangeText,
}: FormInputProps) {
	return (
		<View>
			<Text style={styles.label}>{label}</Text>

			<View style={styles.container}>
				<TextInput
					placeholder={placeholder}
					onChangeText={onChangeText}
					value={value}
					keyboardType={keyboardType}
				></TextInput>

				{error && <Text style={styles.error}>This field is mandatory!</Text>}
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
		marginBottom: 10,
	},

	label: {
		fontSize: 13,
		fontFamily: "Sora_500Medium",
	},

	error: {
		fontSize: 13,
		fontFamily: "Sora_500Medium",
		color: "#530a0a",
	},
});
