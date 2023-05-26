import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text>Login page 1</Text> */}
      <Image source={require("../assets/image1.png")} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate("About")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Go</Text>
      </TouchableOpacity>
     

      
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 450,
    height: 300,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 10,
    width: 150,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,

  },
});
