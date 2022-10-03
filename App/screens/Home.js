import React from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, Text } from "react-native";

import { format } from "date-fns";

import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";

import colors from "../constans/colors";

const screen = Dimensions.get('window');

export default () => {
  const baseCurrency = "USD"
  const quoteCurrency = "GBP"
  const conversionRate = 0.89824
  const date = "2022-10-03"

  return(
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/images/background.png")}
          style={styles.logoBackground}
          resizeMode="contain"
        />
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.textHeader}>Currency Converter</Text>

      <ConversionInput
        text={baseCurrency}
        value="123"
        onButtonPress={() => alert("todo!")}
        keyboardType="numeric"
        onChangeText={text => console.log("text", text)}
      />
      <ConversionInput
        text={quoteCurrency}
        value="123"
        editable={false}
        onButtonPress={() => alert("todo!")}
      />

      <Text style={styles.text}>
        {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(new Date(date), "MMM do, yyyy")}`}
      </Text>

      <Button text="Reverse currencies" onPress={() => {alert('to do!')}} />

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    justifyContent: "center"
  },
  logoBackground: {
    width: screen.width / 0.45,
    height: screen.width * 0.45,
  },
  logo: {
    position: "absolute",
    width: screen.width * 0.25,
    height: screen.width * 0.25,
  },
  textHeader: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  text: {
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
   inputContainer: {
    marginBottom: 10,
  },
})