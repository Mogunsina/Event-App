import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View } from "react-native";

import Index from "./Index";
// import Home from "./Home";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Index />
        {/* <Home /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#CCCCFF",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
