import { View } from "react-native";
import React, { useMemo } from "react";
import { Text } from "~/components/ui/text";
import { bpClassification, bpTextColor } from "~/lib/utils";
import dayjs from "dayjs";
import { cn } from "~/lib/utils";

export default function BpHistoryItem({ item }) {
  const selectedData = useMemo(() => bpClassification(item.upper, item.lower), [item.upper, item.lower]);
  const colorData = useMemo(() => bpTextColor(selectedData), [selectedData]);

  const flViewClassName = cn("rounded-xl bg-card shadow-sm flex gap-y-6 justify-between p-4");
  return (
    <View className={flViewClassName} style={{height: 130}}>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row items-center gap-x-2">
          <Text>
            {item.upper} / {item.lower} <Text className="text-muted-foreground">mmHg</Text>
          </Text>
        </View>

        <View>
          <Text className="text-muted-foreground font-bold text-sm">{dayjs(item.date).format("MMM D, YYYY")}</Text>
        </View>
      </View>

      <View>
        <Text className="font-bold text-xl" style={{color: colorData.tc}}>{selectedData.title}</Text>
      </View>
    </View>
  );
}
