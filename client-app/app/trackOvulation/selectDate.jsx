import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SafeView from "~/components/SafeView";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import Main from "~/components/TrackOvulation/SelectDate/main";
import { useTrackOvulationStore } from "~/lib/store";
import { ArrowRight } from "~/lib/icons";
import { router } from "expo-router";

export default function SelectDate() {
  const insets = useSafeAreaInsets();
  const prevPeriodStartingDate = useTrackOvulationStore((state) => state.prevPeriodStartingDate);
  return (
    <SafeView
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <View className="flex-1 p-4 flex justify-between">
        <Main />

        {prevPeriodStartingDate !== "" ? (
          <View className="flex flex-row justify-end">
            <TouchableOpacity
              className="p-4 w-16 h-16 flex justify-center items-center rounded-full bg-primary"
              onPress={() => router.push("/trackOvulation/selectAverageInterval")}
            >
              <ArrowRight className="text-primary-foreground" size={24} />
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    </SafeView>
  );
}
