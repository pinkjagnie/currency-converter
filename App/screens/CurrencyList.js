import React, { useContext } from "react";
import { StatusBar, View, FlatList, StyleSheet } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { Entypo } from "@expo/vector-icons";

import { ConversionContext } from "../util/ConversionContext";

import { RowItem, RowSeparator } from "../components/RowItem";

import currencies from "../data/curriencies.json";

import colors from "../constans/colors";

export default ({ navigation, route = {} }) => {
  const { baseCurrency, quoteCurrency, setBaseCurrency, setQuoteCurrency } = useContext(ConversionContext);

  const insets = useSafeArea();

  const params = route.params || {};

  return(
    <View style={{backgroundColor: colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList data={currencies} renderItem={({item}) => {
        let selected = false;
        if (params.isBaseCurrency && item === baseCurrency) {
          selected = true;
        } else if (!params.isBaseCurrency && item === quoteCurrency) {
          selected = true;
        }
        return (
          <RowItem text={item} onPress={() => {
            if (params.isBaseCurrency) {
              setBaseCurrency(item)
            } else {
              setQuoteCurrency(item)
            }
            navigation.pop()
          }} 
            rightIcon={
            selected && (
            <View style={styles.icon}>
              <Entypo name="check" size={20} color={colors.white} />
            </View>)
          } />
        )
        }} 
        keyExtractor={(item) => {item}} 
        ItemSeparatorComponent={() => <RowSeparator />} 
        ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue,
  },
});