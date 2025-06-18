import { View, Platform } from "react-native";
import React from "react";
import TabSafeView from "~/components/TabSafeView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Main from "~/components/Profile/rating/main";

export default function Rating() {
  const insets = useSafeAreaInsets();
  return (
    <TabSafeView
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: 70 + (Platform.OS === "ios" ? 25 : 15),
      }}
    >
      <View className="flex-1 p-4 flex gap-y-6">
        <Main />
      </View>
    </TabSafeView>
  );
}
