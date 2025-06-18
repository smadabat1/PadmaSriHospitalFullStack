import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";

export default function Header() {
  return (
    <View className="flex justify-center items-center gap-y-4">
      <View className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center">
        <Text className="font-bold text-2xl">P</Text>
        <View className="w-4 h-4 bg-green-500 rounded-full absolute right-2 bottom-2"></View>
      </View>
      <View className="flex justify-center items-center gap-y-2">
        <View>
          <Text className="font-bold text-2xl">Pavan</Text>
        </View>
        <View>
          <Text className="text-muted-foreground">Member since Janaury 1st 2024</Text>
        </View>
      </View>
    </View>
  );
}
