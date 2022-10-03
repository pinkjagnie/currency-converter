import React from "react";

import { View, StyleSheet, StatusBar } from "react-native";

import colors from "../constans/colors";

export default () => {
  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1
  }
})