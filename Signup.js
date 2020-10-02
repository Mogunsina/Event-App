import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Actions } from "react-native-router-flux";

export default class Signup extends React.Component {
  signIn() {
    Actions.pop();
  }
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      createPassword: "",
      verifyPassword: "",
    };
  }
  _signUp = async () => {
    // if (
    //   userInfo.username === this.state.username &&
    //   userInfo.password === this.state.password
    // ) {
    //   await AsyncStorage.setItem("logged in", "1");
    //   this.props.navigation.navigate("Home");
    //   // alert("You are logged in!");
    // } else {
    //   alert("Username and password are incorrect");
    // }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}> Event+ </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="First Name"
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({ firstName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Last Name"
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({ lastName: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email..."
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Create Password"
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({ createPassword: text })}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Verify Password"
            placeholderTextColor="white"
            onChangeText={(text) => this.setState({ verifyPassword: text })}
          />
        </View>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => alert("Login Works")}
        >
          <Text style={styles.loginText}>SignUp</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signIn}>
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#101820FF",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#f2aa4cff",
    marginBottom: 40,
  },
  inputView: {
    width: 200,
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: 100,
    backgroundColor: "#f2aa4cff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
  },
});
