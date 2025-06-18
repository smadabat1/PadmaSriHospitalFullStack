import { View, Platform } from "react-native";
import React from "react";
import TabSafeView from "~/components/TabSafeView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import Header from "~/components/Profile/general/header";
import Main from "~/components/Profile/general/main";
import Purchase from "~/components/Profile/general/purchase";

export default function GeneralSettings() {
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
        <Header />
        <Purchase />
        <Main />
      </View>
    </TabSafeView>
  );
}
