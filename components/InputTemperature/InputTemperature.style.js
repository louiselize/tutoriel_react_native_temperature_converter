import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch", // permet de ne pas prendre en compte le alignItems du parent
    justifyContent: "center",
  },

  input: {
    backgroundColor: "white",
    borderRadius: 20,
    height: 50,
    paddingLeft: 25,
    fontSize: 18,
  },
  unit: {
    position: "absolute",
    fontSize: 18,
    alignSelf: "flex-end",
    paddingRight: 30,
  },
});
