import React,{Component} from 'react';
import {View, Text, StyleSheet, StatusBar} from 'react-native';
import Header from './src/components/Header';
import { colors } from './src/global/styles';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.statusbar}
      />
      <Header titleVal= "Home"/>

    </View>
  )
}



const styles = StyleSheet.create({
  container: {flex:1}
})