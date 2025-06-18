import { Stack } from "expo-router";
import { View, TouchableOpacity } from "react-native";
import React from "react";
import { ChevronLeft } from "~/lib/icons";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";
import { useTheme } from "@react-navigation/native";

export default function ProfileLayout() {
  const theme = useTheme();
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: theme.colors.background
        }
      }}
    >
      <Stack.Screen
        name="profile"
        options={{
          headerTitle: "Account",
        }}
      />
      <Stack.Screen
        name="generalSettings"
        options={{
          headerTitle: "General Settings",
          headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={18} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="emergency"
        options={{
          headerTitle: "Emergency",
          headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={18} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="support"
        options={{
          headerTitle: "More info & Support",
          headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={18} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="connect"
        options={{
          headerTitle: "Connect with Us",
          headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={18} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="rating"
        options={{
          headerTitle: "Overall Rating",
          headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={18} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="purchase"
        options={{
          headerTitle: "Purchase",
          headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={18} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
    </Stack>
  );
}
