import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import React from "react";
import { Calendar, ChevronLeft } from "~/lib/icons";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function ServicesLayout() {
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
            headerTitle: "Services",
            headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={24} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null
        }}
      />
    </Stack>
  );
}
