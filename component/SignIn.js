import React ,{Component}  from "react";
import {StyleSheet , View , Text} from "react-native";

class SigninComponent extends Component {


    render (){
      return (
        <View style={styles.container}>
        <Text>SingIn</Text>
        </View>
      )
    }
}

export default SigninComponent 

const styles = StyleSheet.create({
  container :{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})