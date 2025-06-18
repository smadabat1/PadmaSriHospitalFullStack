import { ScrollView, View } from "react-native";
import React, { useMemo } from "react";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import Main from "~/components/BmiCalculation/main";

export default function BMICalculation() {
  const insets = useSafeAreaInsets();

  //latest bmi index on top.
  const data = [
    {
      id: 1,
      height: "156",
      weight: "56",
      bmi: "23.01",
      date: "2024-12-25",
    },
    {
      id: 2,
      height: "170",
      weight: "70",
      bmi: "24.22",
      date: "2024-11-23",
    },
    {
      id: 0,
      height: "120",
      weight: "100",
      bmi: "69.44",
      date: "2024-10-01",
    },
  ];
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <View
        className="flex-1 gap-y-4 p-4 justify-between"
      >
        <Main data={data} />
        <Button onPress={() => router.push("/bmiCalculation/enterHeight")}>
          <Text>Track</Text>
        </Button>
      </View>
    </View>
  );
}
