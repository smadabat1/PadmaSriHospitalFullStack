import { View, Pressable } from "react-native";
import React from "react";
import styles from "~/components/CardStyles";
import { Separator } from "~/components/ui/separator";
import { Text } from "~/components/ui/text";
import { ChevronRight, MapPin, Radio, Phone } from "~/lib/icons";

export default function Main() {
  return (
    <View className="flex gap-y-6">
      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Radio className="text-foreground" size={18} />
          </View>
          <Text>Need Help?</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <MapPin className="text-foreground" size={18} />
          </View>
          <Text>Get Hospital Location</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Phone className="text-foreground" size={18} />
          </View>
          <Text>Contact Frontdesk</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>
    </View>
  );
}
