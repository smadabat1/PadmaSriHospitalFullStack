import { View, Button, Pressable } from "react-native";
import React, { useState } from "react";
import { Text } from "~/components/ui/text";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";
import { useBpTrackingStore } from "~/lib/store/bpTracking";
import { useTheme } from "@react-navigation/native";
import Form from "./form";

export default function Main() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const day = useBpTrackingStore((state) => state.day);
  const setDay = useBpTrackingStore((state) => state.setDay);
  const time = useBpTrackingStore((state) => state.time);
  const setTime = useBpTrackingStore((state) => state.setTime);
  const theme = useTheme();

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleConfirmTime = (date) => {
    setTime(date);
    hideTimePicker();
  };

  const handleConfirmDate = (date) => {
    setDay(date);
    hideDatePicker();
  };

  return (
    <View className="flex-1 gap-y-4">
      <View className="gap-y-2">
        <View>
          <Text className="font-semibold">Date</Text>
        </View>
        <View>
          <Pressable
            className="flex p-3 h-12 rounded-md border border-input bg-background text-lg leading-[1.25] text-foreground placeholder:text-muted-foreground"
            onPress={showDatePicker}
          >
            {day ? <Text>{dayjs(day).format("Do, MMMM YYYY")}</Text> : <Text className="text-muted-foreground">24th, November 2024</Text>}
          </Pressable>
        </View>
      </View>

      <View className="gap-y-2">
        <View>
          <Text className="font-semibold">Time</Text>
        </View>
        <View>
          <Pressable
            className="flex p-3 h-12 rounded-md border border-input bg-background text-lg leading-[1.25] text-foreground placeholder:text-muted-foreground"
            onPress={showTimePicker}
          >
            {time ? <Text>{dayjs(time).format("hh:mm A")}</Text> : <Text className="text-muted-foreground">11:50 PM</Text>}
          </Pressable>
        </View>
      </View>
      <Form />

      <DateTimePickerModal isVisible={isDatePickerVisible} mode="date" onConfirm={handleConfirmDate} onCancel={hideDatePicker} />
      <DateTimePickerModal isVisible={isTimePickerVisible} mode="time" onConfirm={handleConfirmTime} onCancel={hideTimePicker} />
    </View>
  );
}
