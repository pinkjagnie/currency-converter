import React from "react";
import { StatusBar } from "react-native";

import colors from "../constans/colors";

export default () => (
  <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
);