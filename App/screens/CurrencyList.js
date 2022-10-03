import React from "react";
import { StatusBar, View, FlatList } from "react-native";
import { useSafeArea } from "react-native-safe-area-context";

import { RowItem, RowSeparator } from "../components/RowItem";

import currencies from "../data/curriencies.json";

import colors from "../constans/colors";

export default ( {navigation} ) => {
  const insets = useSafeArea();

  return(
    <View style={{backgroundColor: colors.white}}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <FlatList data={currencies} renderItem={({item}) => {
        return (
          <RowItem text={item} onPress={() => navigation.pop()} />
        )
        }} 
        keyExtractor={(item) => {item}} 
        ItemSeparatorComponent={() => <RowSeparator />} 
        ListFooterComponent={() => <View style={{ paddingBottom: insets.bottom }} />}
      />
    </View>
  )
};