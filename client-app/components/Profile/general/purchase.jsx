import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import SparkleOverlay from "./sparkleOverlay";

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderRadius: 5,
      flex: 1
    },
  });
  

export default function Purchase() {
  return (
    <Pressable className="rounded-md bg-primary relative h-48 p-4 gap-y-4 justify-between" onPress={() => router.push("/(dashboard)/(profile)/purchase")}>
      <LinearGradient
        // Background Linear Gradient
        colors={["rgba(0,0,0,0.8)", "transparent"]}
        style={styles.background}
      />
      <SparkleOverlay />
      <Text className="text-primary-foreground font-bold text-2xl">Purchase</Text>
      <Text className="text-primary-foreground text-base font-bold">Unlock exclusive features and enhance your experience with our purchase options.</Text>
    </Pressable>
  );
}
