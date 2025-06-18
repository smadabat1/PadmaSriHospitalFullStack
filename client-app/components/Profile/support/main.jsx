import { View, Pressable } from "react-native";
import React from "react";
import styles from "~/components/CardStyles";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import { ChevronRight, Archive, ShieldCheck, Info, MessageCircleMore } from "~/lib/icons";

export default function Main() {
  return (
    <View className="flex gap-y-6">
      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <MessageCircleMore className="text-foreground" size={18} />
          </View>
          <Text>Need Support? Contact here</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <ShieldCheck className="text-foreground" size={18} />
          </View>
          <Text>Privacy policy</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Archive className="text-foreground" size={18} />
          </View>
          <Text>FAQ</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Info className="text-foreground" size={18} />
          </View>
          <Text>About</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>
    </View>
  );
}
