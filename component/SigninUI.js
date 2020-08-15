import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";

class SigninNewComponet extends Component {
  state = {
    email: "",
    password: "",
    emailValidate: true,
    passValidate: true,
  };

  handleEmail = (text) => {
   console.log(Text)
  };

  handlePassword = (text) => {
    console.log(text);
  };

  login = (email, password) => {
    console.log(this.state.passValidate, this.state.emailValidate);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.usernameText}>
          <Text style={{ marginTop: 25 }}> Username </Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onChangeText={this.handleEmail}
          />
        </View>

        <View style={styles.usernameText}>
          <Text style={{ marginTop: 25 }}> Password </Text>
          <TextInput
            style={
              styles.input}
            underlineColorAndroid="transparent"
            // placeholder="password"
            // placeholderTextColor="#9a73ef"
            onChangeText={this.handlePassword}
          />
        </View>

        <View style={styles.submitButtonPlce}>
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => this.login(this.state.email, this.state.password)}
          >
            <Text style={styles.submitButtonText}> Submit </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SigninNewComponet;

const styles = StyleSheet.create({
  container: {
    // paddingTop: 23
    // backgroundColor:  'grey',
    borderColor: "red",
    borderWidth: 1
  },

  usernameText: {
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "left"
    // backgroundColor: "grey",
  },
  input: {
    margin: 15,
    height: 40,
    padding: 10,
    borderColor: "#7a42f4",
    borderWidth: 1,
    justifyContent: "Right",
    alignItems: "Right"
  },
  submitButton: {
    backgroundColor: "#7a42f4",
    padding: 10,
    margin: 15,
    height: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  submitButtonText: {
    color: "white"
  },

  submitButtonPlce: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },

});
