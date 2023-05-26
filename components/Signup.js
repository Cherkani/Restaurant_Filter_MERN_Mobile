import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Signup({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Login Page</Text>
      <Button
        onPress={() => navigation.navigate("Tab")}
        title="Need To Login?"
      />
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
});
