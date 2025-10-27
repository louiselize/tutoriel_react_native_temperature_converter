import { Text } from "react-native";
import { styles } from "./TemperatureDisplay.style";

export default function TemperatureDisplay({ value, unit }) {
  return (
    <Text style={styles.temperatureText}>
      {value} {unit}
    </Text>
  );
}
