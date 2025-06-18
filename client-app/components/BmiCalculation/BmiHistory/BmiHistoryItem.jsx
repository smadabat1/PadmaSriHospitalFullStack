import { View } from "react-native";
import React, { useMemo } from "react";
import { Text } from "~/components/ui/text";
import { bmiClassification, getBmiSliderColor } from "~/lib/utils";
import dayjs from "dayjs";
import { cn } from "~/lib/utils";

export default function BmiHistoryItem({ item, graphSelectedIndex }) {
  const selectedData = useMemo(() => bmiClassification(item.bmi), [item.bmi]);
  const colorData = useMemo(() => getBmiSliderColor(selectedData), [selectedData]);

  const flViewClassName = cn("rounded-xl bg-card shadow-sm flex gap-y-6 justify-between p-4", graphSelectedIndex === item.id ? "border-primary border-2": "")
  return (
    <View className={flViewClassName} style={{height: 130}}>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center gap-x-2">
          <Text>
            {item.height} <Text className="text-muted-foreground">cm</Text> / {item.weight} <Text className="text-muted-foreground">kg</Text>
          </Text>
        </View>

        <View>
          <Text className="text-muted-foreground font-bold text-sm">{dayjs(item.date).format("MMM D, YYYY")}</Text>
        </View>
      </View>

      <View className="">
        <Text className="font-bold text-2xl" style={{ color: colorData.tc }}>
          {item.bmi}
        </Text>
        <Text>{selectedData.subtitle}</Text>
      </View>
    </View>
  );
}
