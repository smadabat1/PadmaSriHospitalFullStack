import { View, FlatList } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BsHistoryItem from "~/components/BsTracking/BsHistoryItem";
import { Text } from "~/components/ui/text";

export default function BpHistory() {
  const insets = useSafeAreaInsets();

  const data = [
    {
      id: 0,
      beforeMeal: "95",
      afterMeal: "135",
      date: "2024-12-10",
    },
    {
      id: 1,
      beforeMeal: "115",
      afterMeal: "165",
      date: "2024-11-11",
    },
    {
      id: 2,
      beforeMeal: "130",
      afterMeal: "210",
      date: "2024-10-15",
    },
    {
      id: 3,
      beforeMeal: "120",
      afterMeal: "160",
      date: "2024-9-7",
    },
    {
      id: 4,
      beforeMeal: "65",
      afterMeal: "75",
      date: "2024-7-10",
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
      <View className="p-4 flex-1 gap-y-4">
        <View>
          <Text className="text-muted-foreground text-sm">
            Explore a detailed list illustrating your BS history, providing insights into trends over time.
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <BsHistoryItem item={item} />}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            gap: 20,
            padding: 2,
          }}
          contentInset={{
            bottom: 50,
          }}
        />
      </View>
    </View>
  );
}
