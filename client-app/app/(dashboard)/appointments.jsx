import { View } from "react-native";
import React from "react";
import TabSafeView from "~/components/TabSafeView";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function Appointments() {
  return (
    <TabSafeView>
      <View className="flex-1 p-4">
        <Text>Appointments</Text>
        <Button onPress={() => router.push("/videoCall")}>
          <Text>Join Video Call</Text>
        </Button>
      </View>
    </TabSafeView>
  );
}
