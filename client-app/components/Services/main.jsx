import { View } from "react-native";
import React from "react";
import { FlashList } from "@shopify/flash-list";
import Card from "./card";
import { data } from "./data";

export default function Main({ openSheet, closeSheet }) {
  return (
    <View className="flex-1">
      <FlashList
        data={data}
        keyExtractor={(item) => item.id}
        estimatedItemSize={30}
        renderItem={({ item }) => <Card item={item} openSheet={openSheet} closeSheet={closeSheet} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentInset={{ bottom: 50 }}
        contentContainerStyle={{
          padding: 2,
        }}
      />
    </View>
  );
}
