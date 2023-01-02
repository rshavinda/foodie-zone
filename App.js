import React,{Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { colors } from './src/global/styles';

import SignInScreen from './src/screens/auth-screens/SignInScreen';


setJSExceptionHandler((error, isFatal) => {
  console.log(error)
}, true)

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.statusbar}
      />

      <SignInScreen />

    </View>
  )
}



const styles = StyleSheet.create({
  container: {flex:1}
})