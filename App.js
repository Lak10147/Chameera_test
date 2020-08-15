import React, { Component } from "react";
import { Button, Image, StyleSheet, Text, View } from "react-native";
import SigninComponent from "./component/SignIn";

const Link = (props) => (
  <Text
    {...props}
    accessibilityRole="link"
    style={StyleSheet.compose(styles.link, props.style)}
  />
);

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SigninComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "col",
    justifyContent: "center",
    alignItems: "center",
    flex: 1
    // marginTop: 10
  }
});

export default App;
