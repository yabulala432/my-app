import React from "react";
import { StyleSheet, Text, Platform } from "react-native";

interface AppTextProps {
  children: any;
  style?: any;
  color?: string;
}

const AppText = ({ children, style = {}, color = "black" }: AppTextProps) => {
  return <Text style={[styles.text, { color: color }, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  },
});

export default AppText;
