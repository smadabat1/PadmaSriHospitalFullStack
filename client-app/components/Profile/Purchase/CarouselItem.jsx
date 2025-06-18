import { View, Text } from "react-native";
import React from "react";

export default function CarouselItem({ item, index }) {
  return (
    <View className="flex-1 justify-center items-center bg-card rounded-xl">
        <Text className="text-black font-bold text-xl">{item.title}</Text>
    </View>
  );
}
