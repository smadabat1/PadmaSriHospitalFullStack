import { View } from "react-native";
import React from "react";
import TabSafeView from "~/components/TabSafeView";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function Track() {
  return (
    <TabSafeView>
      <View className="flex-1 p-4 gap-y-4">
        <Button onPress={() => router.push("/trackOvulation")}>
          <Text>Track Ovulation</Text>
        </Button>
        <Button onPress={() => router.push("/bmiCalculation")}>
          <Text>Calculate BMI</Text>
        </Button>
        <Button onPress={() => router.push("/bpTracking")}>
          <Text>Blood Pressure Tracking</Text>
        </Button>
        <Button onPress={() => router.push("/bsTracking")}>
          <Text>Blood Sugar Tracking</Text>
        </Button>
      </View>
    </TabSafeView>
  );
}
