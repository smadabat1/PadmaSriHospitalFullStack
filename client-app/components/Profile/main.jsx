import { Pressable, View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { Settings2, Activity, Bot, Globe, ChevronRight, Sparkles } from "~/lib/icons";
import { router } from "expo-router";

export default function Main() {
  return (
    <View className="flex gap-y-4">
      <Pressable className="flex flex-row w-full items-center justify-between py-2" onPress={() => router.push("/generalSettings/")}>
        <View className="flex flex-row items-center gap-x-4">
          <View className="flex p-3 bg-primary/10 rounded-full">
            <Settings2 className="text-primary" size={16} />
          </View>
          <Text>General Settings</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={16} />
        </View>
      </Pressable>
      <Pressable className="flex flex-row w-full items-center justify-between py-2" onPress={() => router.push("/emergency/")}>
        <View className="flex flex-row items-center gap-x-4">
          <View className="flex p-3 bg-primary/10 rounded-full">
            <Activity className="text-primary" size={16} />
          </View>

          <Text>Emergency</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={16} />
        </View>
      </Pressable>
      <Pressable className="flex flex-row w-full items-center justify-between py-2" onPress={() => router.push("/support/")}>
        <View className="flex flex-row items-center gap-x-4">
          <View className="flex p-3 bg-primary/10 rounded-full">
            <Bot className="text-primary" size={16} />
          </View>

          <Text>More info and Support</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={16} />
        </View>
      </Pressable>
      <Pressable className="flex flex-row w-full items-center justify-between py-2" onPress={() => router.push("/connect/")}>
        <View className="flex flex-row items-center gap-x-4">
          <View className="flex p-3 bg-primary/10 rounded-full">
            <Globe className="text-primary" size={16} />
          </View>

          <Text>Connect with Us</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={16} />
        </View>
      </Pressable>
      <Pressable className="flex flex-row w-full items-center justify-between py-2" onPress={() => router.push("/rating/")}>
        <View className="flex flex-row items-center gap-x-4">
          <View className="flex p-3 bg-primary/10 rounded-full">
            <Sparkles className="text-primary" size={16} />
          </View>

          <Text>Rate Us</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={16} />
        </View>
      </Pressable>
    </View>
  );
}
