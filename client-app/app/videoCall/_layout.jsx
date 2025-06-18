import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import React from "react";
import { Calendar, ChevronLeft } from "~/lib/icons";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function TrackOvulationLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
            headerTitle: "Live video call",
            headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <></>
            ) : null,
        }}
      />
    </Stack>
  );
}
