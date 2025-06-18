import { View, Pressable } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { ChevronRight, Instagram} from "~/lib/icons";

export default function Main() {
  return (
    <View className="flex gap-y-6">
      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Instagram className="text-foreground" size={18} />
          </View>
          <Text>Instagram</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>
    </View>
  );
}
