import { ScrollView, View } from "react-native";
import React, { useMemo } from "react";
import SafeView from "~/components/SafeView";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { router } from "expo-router";
import Main from "~/components/TrackOvulation/main";

export default function TrackOvulation() {
  const insets = useSafeAreaInsets();
  //TODO - sort the entries based on the periodStartingDate in descending order - latest on the top. 
  const data = useMemo(() => {
    return [
      {
        id: 1,
        periodStartingDate: "2024-12-05",
        periodEndingDate: "",
      },
      {
        id: 2,
        periodStartingDate: "2024-11-10",
        periodEndingDate: "2024-11-15",
      },
    ];
  }, []);
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
      <View className="flex-1 gap-y-4">
        <Main data={data}/>
      </View>
    </View>
  );
}
