import { View } from "react-native";
import React, { useEffect } from "react";
import { MotiView } from "moti";
import { Sparkle, Sparkles } from "~/lib/icons";

export default function SparkleOverlay() {
  return (
    <MotiView
      from={{
        opacity: 0.4,
      }}
      animate={{
        opacity: 0.7,
      }}
      transition={{
        loop: true,
        type: "timing",
        duration: 600,
      }}
      className="gap-y-4 absolute right-4 top-4"
    >
      <View className="flex flex-row gap-x-2 items-center">
        <Sparkle size={8} fill={"white"} stroke={"white"} />
        <View className="top-2">
          <Sparkle size={10} fill={"white"} stroke={"white"} />
        </View>
      </View>
      <View>
        <Sparkles size={12} fill={"white"} stroke={"white"} />
      </View>
    </MotiView>
  );
}
