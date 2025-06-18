import { View, Text, Pressable } from "react-native";
import React from "react";
import { MoveRight } from "~/lib/icons";
import ServicesCarousel from "./ServicesCarousel";
import { router } from "expo-router";

export default function ServicesMain() {
  return (
    <View className="gap-y-4">
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold text-lg">Services</Text>
        <Pressable onPress={() => router.push("/services")}><Text className="text-muted-foreground">View all</Text></Pressable>
      </View>
      <ServicesCarousel />
    </View>
  );
}
