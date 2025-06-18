import { View, Platform, ScrollView } from "react-native";
import React from "react";
import TabSafeView from "~/components/TabSafeView";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "~/components/Profile/header";
import Logout from "~/components/Profile/logout";
import Main from "~/components/Profile/main";

export default function Profile() {
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
      <View className="flex-1 p-4 flex gap-y-12">
        <View className="gap-y-6">
          <Header />
          <Main />
        </View>
        <Logout />
      </View>
    </TabSafeView>
  );
}
