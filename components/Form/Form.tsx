import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import FormInput from "./FormInput";
import DropdownComp from "./DropdownComp";
import FormButton from "./FormButton";

const data = [
  { label: "Jonas", value: "1" },
  { label: "Janaína", value: "2" },
  { label: "Jabur", value: "3" },
  { label: "Jéssica", value: "4" },
];

export default function Form() {
  const [selectedClient, setSelectedCLient] = useState<object | null>();
  const [debt, setDebt] = useState("");
	const [observation, setObservation] = useState("");

  const [touched, setTouched] = useState(false);


  const [isValid, setIsValid] = useState(false);
  const showError = touched && !isValid;

  useEffect(() => {
    if (debt != "" && selectedClient != null) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [debt, selectedClient]);

  return (
    <View style={styles.container}>
      <Logo />

      <Text style={styles.title}>Pendurator</Text>

      <DropdownComp
        data={data}
        onSelect={(item) => {
          setSelectedCLient(item);
        }}
      ></DropdownComp>

      <FormInput
        label="Debt"
        placeholder="R$"
        error={showError}
        value={debt}
        keyboardType="number-pad"
        onChangeText={(text) => {
          setDebt(text);
          setTouched(true);
        }}
      />

      <FormInput label="Observation" placeholder="..." value={observation} onChangeText={(text) => {
				setObservation(text);
			}} />

      <FormButton
        isFormValid={isValid}
        onSubmit={{ debt, selectedClient, observation }}
      ></FormButton>
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
