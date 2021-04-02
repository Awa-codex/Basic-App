import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator, createStactNavigation, StackView} from "@react-navigation/stack";


import fire from './screens/fire';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import HomeWelcomeScreen from './screens/HomeWelcomeScreen';

const Stack = createStackNavigator();
//import RootStackScreen from './screens.RootStackScreen'

export default function App() {


//const[isLoading,setIsLoading] =React.useState(true);
//const[userToken, setUserToken] = React.useState(null);


  return (

      <NavigationContainer>    
    <Stack.Navigator
    initialRouteName="theLoginScreen"
      screenOptions={
        {
          headerTintColor:'white',
          headerStyle:{backgroundColor:'purple'}
        }
      }>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options ={{ header: () => {} }}/>
        <Stack.Screen name="theLoginScreen" component={LoginScreen} options ={{ header: () => {} }} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} options ={{ header: () => {} }}/>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} options ={{ header: () => {} }} />
        <Stack.Screen name="HomeWelcomeScreen" component={HomeWelcomeScreen} options ={{ header: () => {} }} options ={({route})=>({title:route.params.user})} />        
      </Stack.Navigator>


    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
