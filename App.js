import { ImageBackground, Text, View } from "react-native";
import { styles } from "./App.style";
import hotBackground from "./assets/hot.png";
import InputTemperature from "./components/InputTemperature/InputTemperature";

export default function App() {
  return (
    <>
      <ImageBackground style={styles.container} source={hotBackground}>
        <View style={styles.workspace}>
          <View>
            <Text>Temperature</Text>
          </View>
          <InputTemperature defaultValue={"12"} />
          <View>
            <Text>Button</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
