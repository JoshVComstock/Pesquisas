
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Results from "./Results";
import Login from "./Login";
import React from "react";
const Stack=createNativeStackNavigator();
const Nav = () => (
    <NavigationContainer>
    <Stack.Navigator
    initialRouteName="Home"
    >
        <Stack.Screen name="Home"  component={Home}  />
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Results" component={Results}   />
    </Stack.Navigator>
    </NavigationContainer>
)
export default Nav;