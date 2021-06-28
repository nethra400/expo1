//View Image Screen and refactoring
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deletIcon}>
        <Image
          style={styles.image}
          source={require("../fdwzle1466399804640-80x64.jpg")}
        ></Image>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.black,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  closeIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.primary,
    position: "absolute",
    top: 40,
    left: 30,
  },
  deletIcon: {
    width: 50,
    height: 50,
    backgroundColor: Colors.secondary,
    position: "absolute",
    top: 40,
    left: 30,
  },
});
export default ViewImageScreen;
