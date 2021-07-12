import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";

// import { Actions } from "react-native-router-flux";

// const HomeStack = createStackNavigator();
// const ActivityStack = createStackNavigator();
// const AccountStack = createStackNavigator();

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
const image = { uri: "https://wallpaperset.com/w/full/e/6/5/494729.jpg" };

export default function Home() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#F2AA4CFF"
        inactiveColor="gray"
        barStyle={{ backgroundColor: "black" }}
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
            return <Ionicons name={iconName} size={20} color={color} />;
          },
        })}
        // tabBarOptions={{
        //   activeTintColor: "#F2AA4CFF",
        //   inactiveTintColor: "gray",
        // }}
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
    <View style={styles.activity}>
      <View style={styles.activity1}>
        <ImageBackground source={image} style={styles.image}>
          <Text style={styles.actText1}> Hello </Text>
        </ImageBackground>
      </View>
      <View style={styles.activity2} />
      <View style={styles.activity3} />
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
    //flex: 1,
    //backgroundColor: "black",
    //alignItems: "center",
    //justifyContent: "center",
  },
  account: {
    // backgroundColor: "white",
    color: "white",
    borderBottomWidth: 1,
    padding: 5,
  },
  activity: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    //color: "white",
  },
  activity1: {
    height: 70,
    width: 400,
    // backgroundColor: "blue",
    //borderRadius: 20,
    // bottom: 200,
  },
  activity2: {
    height: 60,
    width: 400,
    backgroundColor: "#F2AA4CFF",
    borderRadius: 20,
    bottom: 150,
  },
  activity3: {
    height: 60,
    width: 400,
    backgroundColor: "#F2AA4CFF",
    borderRadius: 20,
    bottom: 100,
  },
  actText1: {
    justifyContent: "center",
    color: "white",
    textAlign: "center",
    //padding: 20,
  },
  image: {
    flex: 1,
    borderRadius: 20,
    resizeMode: "cover",
    justifyContent: "center",
    overflow: "hidden",
    bottom: 200,
  },

  home: {
    color: "white",
    //flex: 1,
    //flexDirection: "column",

    borderBottomWidth: 1,
    borderBottomColor: "#000",
    padding: 5,
  },
});
