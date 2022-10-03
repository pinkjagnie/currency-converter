import React, { useState, useContext } from "react";
import { View, StyleSheet, StatusBar, Image, Dimensions, Text, ScrollView, TouchableOpacity } from "react-native";

import { ConversionContext } from "../util/ConversionContext";

import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import { ConversionInput } from "../components/ConversionInput";
import { Button } from "../components/Button";
import { KeyboardSpacer } from "../components/KeyboardSpacer";

import colors from "../constans/colors";

const screen = Dimensions.get('window');

export default ( {navigation} ) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);
  const [value, setValue] = useState("100");

  const { baseCurrency, quoteCurrency, swapCurrencies } = useContext(ConversionContext);

  const conversionRate = 0.89824;
  const date = new Date();

  return(
    <View style={styles.container}>
      <ScrollView scrollEnabled={scrollEnabled}>
        <StatusBar barStyle="light-content" />

        <SafeAreaView style={styles.header}>
          <TouchableOpacity onPress={() => navigation.push("Options")}>
            <Entypo name="cog" size={32} color={colors.white} />
          </TouchableOpacity>
        </SafeAreaView>

        <View style={styles.content}>
        
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
            value={value}
            onButtonPress={() => navigation.push('CurrencyList', {title: 'Base Currency', isBaseCurrency: true})}
            keyboardType="numeric"
            onChangeText={text => setValue(text)}
          />
          <ConversionInput
            text={quoteCurrency}
            value={
              value && `${(parseFloat(value) * conversionRate).toFixed(2)}`
            }
            editable={false}
            onButtonPress={() => navigation.push("CurrencyList", {title: 'Quote Currency', isBaseCurrency: false})}
          />

          <Text style={styles.text}>
            {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency} as of ${format(new Date(date), "MMM do, yyyy")}`}
          </Text>

          <Button text="Reverse currencies" onPress={() => swapCurrencies()} />

          <KeyboardSpacer onToggle={(keyboardIsVisible) => {setScrollEnabled(keyboardIsVisible)}} />
        </View>
      </ScrollView>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    flex: 1,
    // justifyContent: "center"
  },
  content: {
    paddingTop: screen.height * 0.1,
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
  header: {
    alignItems: "flex-end",
    marginHorizontal: 20,
  },
})