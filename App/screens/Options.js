import React from 'react';
import { SafeAreaView } from 'react-native';

import { RowItem, RowSeparator } from '../components/RowItem';

import { Entypo } from "@expo/vector-icons";

import colors from "../constans/colors";

export default () => {
  return (
    <SafeAreaView>

      <RowItem
        text="Themes"
        rightIcon={<Entypo name="chevron-right" size={20} color={colors.blue}/>} 
        onPress={() => {alert("to do!")}}
      />

      <RowSeparator/>

      <RowItem
        text="React Native Basics"
        rightIcon={<Entypo name="export" size={20} color={colors.blue}/>} 
        onPress={() => {alert("to do!")}}
      />

      <RowSeparator />

      <RowItem
        text="React Native by Example"
        rightIcon={<Entypo name="export" size={20} color={colors.blue}/>} 
        onPress={() => {alert("to do!")}}
      />

    </SafeAreaView>
  )
};