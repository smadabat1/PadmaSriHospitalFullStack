import { View, TouchableOpacity } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import Main from "~/components/BmiCalculation/HeightTracking/main";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function EnterHeight() {
  const insets = useSafeAreaInsets();
  
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="flex-1 p-4 flex justify-between">
          <Main />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
