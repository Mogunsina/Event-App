import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

// import { Actions } from "react-native-router-flux";

// const HomeStack = createStackNavigator();
// const ActivityStack = createStackNavigator();
// const AccountStack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-home";
            } else if (route.name === "Activity") {
              iconName = "ios-list-box";
            } else if (route.name === "Account") {
              iconName = "ios-person";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#F2AA4CFF",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Activity" component={ActivityScreen} />
        <Tab.Screen name="Account" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// enterProfile() {
//   return Actions.Profile();
// }

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: "My home",
//           headerStyle: { backgroundColor: "black" },
//           headerTintColor: "white",
//         }}
//       />
//     </HomeStack.Navigator>
//   );
// }
// function ActivityStackScreen() {
//   return (
//     <ActivityStack.Navigator>
//       <ActivityStack.Screen
//         name="Settings"
//         component={ActivityScreen}
//         options={{
//           title: "Activity",
//           headerStyle: { backgroundColor: "black" },
//           headerTintColor: "white",
//         }}
//       />
//     </ActivityStack.Navigator>
//   );
// }
// function AccountStackScreen() {
//   return (
//     <AccountStack.Navigator>
//       <AccountStack.Screen
//         name="My Account"
//         component={AccountScreen}
//         options={{
//           title: "Account",
//           headerStyle: { backgroundColor: "black" },
//           headerTintColor: "white",
//         }}
//       />
//     </AccountStack.Navigator>
//   );
// }
function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.home}>Home Screen</Text>
    </View>
  );
}
function ActivityScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.activity}>Activity Screen</Text>
    </View>
  );
}
function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.account}>Account Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  account: {
    // backgroundColor: "white",
    color: "white",
    borderBottomWidth: 1,
    padding: 5,
  },
  activity: {
    // backgroundColor: "white",
    color: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
  },
  home: {
    color: "white",
    // alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
  },
});
