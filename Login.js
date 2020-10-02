import React from "react";
import {
  AsyncStorage,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Actions } from "react-native-router-flux";
// import Home from "./Home";

const userInfo = { username: "mo", password: "1234" };
const image = { uri: "https://wallpaperset.com/w/full/e/6/5/494729.jpg" };
//hello morayo
export default class Login extends React.Component {
  // enterHome() {
  //   Actions.home();
  // }
  signup() {
    Actions.signup();
  }
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  _login = async () => {
    if (
      userInfo.username === this.state.username &&
      userInfo.password === this.state.password
    ) {
      await AsyncStorage.setItem("logged in", "1");
      this.props.navigation.navigate("Home");
      // alert("You are logged in!");
    } else {
      alert("Username and password are incorrect");
    }
  };

  render() {
    return (
      // <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        {/* <ImageBackground source={image} style={styles.image}>  */}
        <Text style={styles.logo}> Event+ </Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            value={this.state.username}
            textAlign="center"
            placeholder="Username..."
            placeholderTextColor="white"
            autoCapitalize="none"
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.inputText}
            value={this.state.password}
            textAlign="center"
            placeholder="Password..."
            placeholderTextColor="white"
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={this._login}
          // onPress={this.enterHome}
        >
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.signup}>
          <Text style={styles.loginText}>Sign Up</Text>
        </TouchableOpacity>
        {/* </ImageBackground> */}
      </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#101820FF",
  },
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#F2AA4CFF",
    alignItems: "center",
    marginBottom: 40,
    textAlign: "center",
  },
  inputView: {
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
  },
  inputText: {
    height: 50,
    //textAlign: "center",
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
    textAlign: "center",
  },
  loginBtn: {
    //backgroundColor: "#101820FF",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "white",
    textAlign: "center",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
