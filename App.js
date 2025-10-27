import { useEffect, useState } from "react";
import { ImageBackground, View } from "react-native";
import { styles } from "./App.style";
import coldBackground from "./assets/cold.png";
import hotBackground from "./assets/hot.png";
import ButtonConvert from "./components/ButtonConvert/ButtonConvert";
import InputTemperature from "./components/InputTemperature/InputTemperature";
import TemperatureDisplay from "./components/TemperatureDisplay/TemperatureDisplay";
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from "./constant";
import {
  convertTemperatureTo,
  getOppositeUnit,
  isIceTemperature,
} from "./services/temperature-service";
export default function App() {
  const [inputTemperatureValue, setInputTemperatureValue] =
    useState(DEFAULT_TEMPERATURE);
  const [currentBackground, setCurrentBackground] = useState();
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositeUnit(currentUnit);

  useEffect(() => {
    const temperatureValueAsFloat = Number.parseFloat(inputTemperatureValue);
    if (!isNaN(temperatureValueAsFloat)) {
      isIceTemperature(inputTemperatureValue, currentUnit)
        ? setCurrentBackground(coldBackground)
        : setCurrentBackground(hotBackground);
    }
  }, [inputTemperatureValue, currentUnit]);

  function getConvertedTemperature() {
    const valueAsFloat = Number.parseFloat(inputTemperatureValue);
    return Number.isNaN(valueAsFloat)
      ? ""
      : convertTemperatureTo(valueAsFloat, oppositeUnit).toFixed(1);
  }
  return (
    <>
      <ImageBackground style={styles.container} source={currentBackground}>
        <View style={styles.workspace}>
          <TemperatureDisplay
            value={getConvertedTemperature()}
            unit={oppositeUnit}
          />
          <InputTemperature
            onChangeText={setInputTemperatureValue}
            defaultValue={DEFAULT_TEMPERATURE}
            unit={currentUnit}
          />
          <ButtonConvert
            onPress={() => setCurrentUnit(oppositeUnit)}
            unit={currentUnit}
          />
        </View>
      </ImageBackground>
    </>
  );
}
