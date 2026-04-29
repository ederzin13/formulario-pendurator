import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Logo from "./Logo";
import FormInput from "./FormInput";
import DropdownComp from "./DropdownComp";
import FormButton from "../../FormButton";

export default function Form() {
	const [debt, setDebt] = useState("");
	const [touched, setTouched] = useState(false);

	const isValid = debt.trim().length > 0;
	const showError = touched && !isValid;

	return (
		<View style={styles.container}>
			<Logo />

			<Text style={styles.title}>Pendurator</Text>

			<DropdownComp></DropdownComp>

			<FormInput
				label="Debt"
				placeholder="R$"
				error={showError}
				value={debt}
				onChangeText={(text) => {
					setDebt(text);
					setTouched(true);
				}}
			></FormInput>

			<FormButton isFormValid={isValid}></FormButton>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
	},

	title: {
		fontSize: 25,
		fontWeight: "600",
		fontFamily: "Sora_700Bold",
	},
});
