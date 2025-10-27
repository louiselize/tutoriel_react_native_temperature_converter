import { useState } from "react";
import { ImageBackground, Text, View } from "react-native";
import { styles } from "./App.style";
import hotBackground from "./assets/hot.png";
import InputTemperature from "./components/InputTemperature/InputTemperature";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constant";
import {
  convertTemperatureTo,
  getOppositeUnit,
} from "./services/temperature-service";
export default function App() {
  const [inputTemperatureValue, setInputTemperatureValue] =
    useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositeUnit(currentUnit);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputTemperatureValue);
    return Number.isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(valueAsFloat, oppositeUnit).toFixed(1);
  }
  return (
    <>
      <ImageBackground style={styles.container} source={hotBackground}>
        <View style={styles.workspace}>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={oppositeUnit}
          />
          <InputTemperature
            onChangeText={setInputTemperatureValue}
            defaultValue={DEFAULT_TEMPERATURE}
          />
          <View>
            <Text>Button</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
