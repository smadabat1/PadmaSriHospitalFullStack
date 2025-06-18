import { View } from "react-native";
import React from "react";
import { data } from "./data";
import { FlashList } from "@shopify/flash-list";
import Card from "./card";

export default function Main({ openSheet, closeSheet }) {
  return (
    <View className="flex-1">
      <FlashList
        data={data}
        renderItem={({ item }) => <Card item={item} openSheet={openSheet} closeSheet={closeSheet} />}
        keyExtractor={(item) => item.id}
        estimatedItemSize={10}
        contentContainerStyle={{
          padding: 2
        }}
      />
    </View>
  );
}
