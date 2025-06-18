import { View, Text } from "react-native";
import React from "react";
import TabSafeView from "~/components/TabSafeView";
import Main from "~/components/Home/main";

export default function Home() {
  return (
    <TabSafeView>
      <View className="flex-1 p-4">
        <Main />
      </View>
    </TabSafeView>
  );
}
