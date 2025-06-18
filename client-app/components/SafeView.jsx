import { View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SafeView({ children, ...props }) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex:1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
      }}
      {...props}
    >
      {children}
    </View>
  );
}
