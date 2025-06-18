import { Stack } from "expo-router";
import { TouchableOpacity } from "react-native";
import React from "react";
import { Calendar, ChevronLeft } from "~/lib/icons";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function BMICalculationLayout() {
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
            headerTitle: "BMI",
            headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={24} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
            headerRight: ({ onPress, canGoBack }) =>
             (
              <TouchableOpacity onPress={() => router.push("/bmiCalculation/bmiHistory")} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <Calendar className="text-foreground" size={20} />
              </TouchableOpacity>
            ),
        }}
      />
      <Stack.Screen
        name="enterHeight"
        options={{
            headerTitle: "Height Tracking",
            headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={24} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="enterWeight"
        options={{
            headerTitle: "Weight Tracking",
            headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={24} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
      <Stack.Screen
        name="bmiHistory"
        options={{
            headerTitle: "History",
            headerLeft: ({ onPress, canGoBack }) =>
            canGoBack ? (
              <TouchableOpacity onPress={() => router.back()} className="flex flex-row gap-x-2 ml-[-8] items-center">
                <ChevronLeft className="text-primary" size={24} />
                <Text className="text-primary">Back</Text>
              </TouchableOpacity>
            ) : null,
        }}
      />
    </Stack>
  );
}
