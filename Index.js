import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Router, Scene } from "react-native-router-flux";

import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
// import history from "./history";

const Index = () => (
  <Router>
    <Scene key="root" hideNavBar={true}>
      <Scene key="login" component={Login} title="Login" />
      <Scene key="signup" component={Signup} title="SignUp" />
      <Scene key="Home" component={Home} title="Home" initial />
    </Scene>
  </Router>
);
export default Index;
