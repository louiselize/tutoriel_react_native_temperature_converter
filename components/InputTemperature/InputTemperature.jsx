import { Text, TextInput, View } from "react-native";
import { styles } from "./InputTemperature.style";

export default function InputTemperature({ defaultValue, onChangeText }) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tappe une température"
        keyboardType="numeric"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={styles.unit}>°C</Text>
    </View>
  );
}
