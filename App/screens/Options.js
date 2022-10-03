import React from 'react';
import { SafeAreaView, ScrollView, Linking, Alert } from 'react-native';

import { RowItem, RowSeparator } from '../components/RowItem';

import { Entypo } from "@expo/vector-icons";

import colors from "../constans/colors";

const openUrl = (url) => {
  return Linking.openURL(url).catch(() => {
    Alert.alert("Ups, something went wrong", "Please try again later")
  })
}

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>

        <RowItem
          text="Themes"
          rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue}/>} 
          onPress={() => {openUrl("https://google.com")}}
        />

        <RowSeparator/>

        <RowItem
          text="React Native Basics"
          rightIcon={<Entypo name="export" size={20} color={colors.blue}/>} 
          onPress={() => {openUrl("https://google.com")}}
        />

        <RowSeparator />

        <RowItem
          text="React Native by Example"
          rightIcon={<Entypo name="export" size={20} color={colors.blue}/>} 
          onPress={() => {openUrl("https://google.com")}}
        />

      </ScrollView>
    </SafeAreaView>
  )
};