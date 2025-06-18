import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { LinearGradient } from "expo-linear-gradient";

export default function CarouselItem({ item, index }) {
  const styles = StyleSheet.create({
    background: {
      position: "absolute",
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderRadius: 13,
      flex: 1,
    },
  });

  return (
    <View className="flex-1 bg-card rounded-xl p-4 justify-between">
      <LinearGradient colors={["rgba(0,0,0,0.5)", "rgba(0,0,0,0.5)"]} start={[0, 0]} end={[0, 0]} style={styles.background} />
      <Text className="text-white font-bold text-xl">{item.title}</Text>
      <Text className="text-white">{item.subtitle}</Text>
    </View>
  );
}
