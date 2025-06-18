import { View, FlatList } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import BpHistoryItem from "~/components/BpTracking/BpHistoryItem";
import { Text } from "~/components/ui/text";

export default function BpHistory() {
  const insets = useSafeAreaInsets();

  const data = [
    {
      id: 0,
      upper: "115",
      lower: "75",
      date: "2024-12-10",
    },
    {
      id: 1,
      upper: "135",
      lower: "85",
      date: "2024-11-11",
    },
    {
      id: 2,
      upper: "142",
      lower: "92",
      date: "2024-10-15",
    },
    {
      id: 3,
      upper: "120",
      lower: "70",
      date: "2024-9-7",
    },
    {
      id: 4,
      upper: "185",
      lower: "115",
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
            Explore a detailed list illustrating your BP history, providing insights into trends over time.
          </Text>
        </View>
        <FlatList
          data={data}
          renderItem={({ item }) => <BpHistoryItem item={item} />}
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
