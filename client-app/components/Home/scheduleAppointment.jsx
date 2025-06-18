import { Pressable, View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
    background: {
      position: 'absolute',
      left: 0,
      top: 0,
      right: 0,
      bottom: 0,
      borderRadius: 5,
      flex: 1
    },
  });

export default function ScheduleAppointment() {
  return (
    <View className="p-4 bg-card rounded-xl shadow-sm h-52 justify-between relative" style={{ elevation: 5 }}>
      <View>
        <Text className="font-bold text-lg">Schedule an appointment</Text>
        <Text className="text-sm">Easily book your appointment with our experts at your convenience. scheduel now!</Text>
      </View>
      <Pressable className="self-end bg-primary shadow-sm flex-end p-4 rounded-full">
        <Text className="text-primary-foreground font-bold">Book appointment</Text>
      </Pressable>
    </View>
  );
}
