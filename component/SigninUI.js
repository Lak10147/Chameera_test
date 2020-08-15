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
    emailError: "",
    passwordError: ""
  };

  handleEmail = (text) => {
    console.log(text);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(text) === false) {
      console.log("Email is Not Correct");
      this.setState({ emailValidate: false });
    } else {
      this.setState({ email: text, emailValidate: true });
      this.setState({ emailError: "" });
      console.log("Email is Correct");
    }
  };

  handlePassword = (text) => {
    console.log(text);
    let reg = /^$|\s+/;
    if (reg.test(text) === false) {
      console.log("password is Not Correct");
      this.setState({ passValidate: false });
      this.setState({ passwordError: "", password: text });
    } else {
      this.setState({ password: text, passValidate: true });
      console.log("Add the password");
    }
  };

  login = (email, password) => {
    console.log(this.state.passValidate, this.state.emailValidate);
    if (this.state.passValidate === true && this.state.emailValidate === true) {
      if (this.state.password !== "" && this.state.email !== "") {
      } else if (this.state.password === "" && this.state.email !== "") {
        this.setState({ passwordError: "Please enter password " });
      } else if (this.state.password !== "" && this.state.email === "") {
        this.setState({ emailError: "Please enter email " });
      } else {
        this.setState({ emailError: "Please enter email" });
        this.setState({ passwordError: "Please enter password" });
      }
    } else if (
      this.state.passValidate === true &&
      this.state.emailValidate === false
    ) {
      this.setState({ emailError: "Please enter corect email" });
    } else if (
      this.state.passValidate === false &&
      this.state.emailValidate === true
    )
     {
      if (this.state.password !== "" && this.state.email !== "") {
        alert("email   : " + email + "password  :" + password);
      } else {
        this.setState({ emailError: "Please enter email " });
      }
    } 
    else if (
        this.state.passValidate === false &&
        this.state.emailValidate === false
      ){
        this.setState({ emailError: "Please enter cortect email " });
      }
    else {
      alert("email   : " + email + "password  :" + password);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.usernameText}>
          <Text style={{ marginTop: 25 }}> Username </Text>
          <TextInput
            style={[
              styles.input,
              !this.state.emailValidate ? styles.error : null
            ]}
            underlineColorAndroid="transparent"
            onChangeText={this.handleEmail}
          />
        </View>

        <View style={styles.emailError}>
          <Text style={{ color: "red", fontSize: 10 }}>
            {this.state.emailError}
          </Text>
        </View>

        <View style={styles.usernameText}>
          <Text style={{ marginTop: 25 }}> Password </Text>
          <TextInput
            style={[
              styles.input,
              !this.state.emailValidate ? styles.error1 : null
            ]}
            underlineColorAndroid="transparent"
            // placeholder="password"
            // placeholderTextColor="#9a73ef"
            onChangeText={this.handlePassword}
          />
        </View>

        <View style={styles.emailError}>
          <Text style={{ color: "red", fontSize: 10 }}>
            {this.state.passwordError}
          </Text>
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
  error: {
    borderWidth: 3,
    borderColor: "red"
  },
  emailError: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    right: 20
  }
});
