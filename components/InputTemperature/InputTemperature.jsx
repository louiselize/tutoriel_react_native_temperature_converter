import { Text, TextInput, View } from "react-native";
import { styles } from "./InputTemperature.style";

export default function InputTemperature({ defaultValue }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tappe une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
      />
      <Text style={styles.unit}>°C</Text>
    </View>
  );
}
