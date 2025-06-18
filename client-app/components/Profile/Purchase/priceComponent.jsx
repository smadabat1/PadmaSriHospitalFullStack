import { View, Text } from "react-native";
import React from "react";
import { MotiView } from "moti";

export default function PriceComponent({ selectedFeature }) {
  return (
    <View className="flex flex-row gap-x-6 items-center relative rounded-md justify-center p-6 shadow-sm bg-card">
      <MotiView
        from={{ scale: 1 }}
        animate={{ scale: 1.2 }}
        transition={{
          loop: true,
          type: "timing",
          duration: 600,
        }}
        className="absolute top-2 left-2"
      >
        <Text className="text-xs text-orange-500 font-bold">OFFER</Text>
      </MotiView>
      <Text className="font-muted-foreground text-2xl line-through">{selectedFeature.original_price}</Text>
      <View className="flex-row gap-x-2 items-center">
        <Text className="font-muted-foreground text-4xl text-primary">{selectedFeature.price}</Text>
        <Text>only</Text>
      </View>
    </View>
  );
}
