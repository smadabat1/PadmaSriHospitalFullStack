import { View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeView from "~/components/SafeView";
import { Text } from "~/components/ui/text";
import Main from "~/components/TrackOvulation/SelectAverageInterval/main";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function SelectAvgInterval() {
  const insets = useSafeAreaInsets();
  return (
    <SafeView
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
    </SafeView>
  );
}
