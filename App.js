import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import Home from "./screens/Home";
import Main from "./screens/Main";

const STACK = createStackNavigator();


export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <STACK.Navigator initialRouteName='Home'
				screenOptions={{
					headerShown: false,
				}}>
          <STACK.Screen  name='Home' component = {Home}></STACK.Screen>
            <STACK.Screen name= 'Main' component = {Main}></STACK.Screen>
        </STACK.Navigator>
      </NavigationContainer>
    );
  }
}