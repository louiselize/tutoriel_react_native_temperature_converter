import { ImageBackground, Text, View } from "react-native";
import { styles } from "./App.style";
import hotBackground from "./assets/hot.png";
export default function App() {
  return (
    <>
      <ImageBackground style={styles.container} source={hotBackground}>
        <View style={styles.workspace}>
          <View>
            <Text>Temperature</Text>
          </View>
          <View>
            <Text>Input</Text>
          </View>
          <View>
            <Text>Button</Text>
          </View>
        </View>
      </ImageBackground>
    </>
  );
}
