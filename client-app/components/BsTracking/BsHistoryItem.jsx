import { View } from "react-native";
import React, { useMemo } from "react";
import { Text } from "~/components/ui/text";
import { bsClassifcation, bsTextColor } from "~/lib/utils";
import dayjs from "dayjs";
import { cn } from "~/lib/utils";

export default function BsHistoryItem({ item }) {
  const selectedData = useMemo(() => bsClassifcation(item.beforeMeal, item.beforeMeal), [item.beforeMeal, item.beforeMeal]);
  const textColor = useMemo(() => bsTextColor(selectedData.generalStatus), [selectedData]);

  const flViewClassName = cn("rounded-xl bg-card shadow-sm flex gap-y-12 justify-between p-4");
  return (
    <View className={flViewClassName} style={{elevation: 5}}>
      <View className="flex flex-row justify-between">
        <View className="flex flex-row gap-x-2">
          <View className="p-2 rounded-md border-muted-foreground gap-y-2" >
            <Text className="text-sm text-muted-foreground">Before Meal</Text>
            <Text>
              {item.beforeMeal} <Text className="text-sm text-muted-foreground">mg/dL</Text>
            </Text>
          </View>

          <View className="p-2 rounded-md border-muted-foreground gap-y-2">
            <Text className="text-sm text-muted-foreground">After Meal</Text>
            <Text>
              {item.afterMeal} <Text className="text-sm text-muted-foreground">mg/dL</Text>
            </Text>
          </View>
        </View>

        <View>
          <Text className="text-muted-foreground font-bold text-sm">{dayjs(item.date).format("MMM D, YYYY")}</Text>
        </View>
      </View>

      <View>
        <Text className="font-bold text-xl" style={{color: textColor}}>{selectedData.generalStatus}</Text>
        {(selectedData.recommendations && selectedData.recommendations.length !== 0) &&  <Text className="text-sm" numberOfLines={3}>
          {selectedData.recommendations.join(", ")}
        </Text>}
       
      </View>
    </View>
  );
}
