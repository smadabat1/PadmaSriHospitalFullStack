import { View } from "react-native";
import React from "react";
import { Calendar } from "react-native-calendars";
import { Text } from "~/components/ui/text";
import { useTheme } from "@react-navigation/native";
import dayjs from "dayjs";
import { useTrackOvulationStore } from "~/lib/store";

export default function Main() {
  const theme = useTheme();
  const setPrevPeriodStartingDate = useTrackOvulationStore((state) => state.setPrevPeriodStartingDate);
  const prevPeriodStartingDate = useTrackOvulationStore((state) => state.prevPeriodStartingDate);

  const maxDate = dayjs().format("YYYY-MM-DD");

  return (
    <View>
      <Calendar
        onDayPress={(day) => {
          setPrevPeriodStartingDate(day.dateString);
        }}
        markedDates={{
          [prevPeriodStartingDate]: { selected: true, disableTouchEvent: true },
        }}
        theme={{
          backgroundColor: theme.colors.background,
          calendarBackground: theme.colors.card,
          textSectionTitleColor: theme.colors.text,
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: "white",
          todayTextColor: theme.colors.primary,
          dayTextColor: theme.colors.text,
          arrowColor: theme.colors.primary,
        }}
        maxDate={maxDate}
        style={{
          borderRadius: 25,
          height: 450,
        }}
        displayLoadingIndicator={false}
        enableSwipeMonths={true}
        disableAllTouchEventsForDisabledDays={true}
        pagingEnabled={true}
      />
    </View>
  );
}
