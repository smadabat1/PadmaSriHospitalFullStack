import { View, Text, Pressable } from "react-native";
import React, { useState, useMemo, useRef } from "react";
import { CalendarList } from "react-native-calendars";
import { useTheme } from "@react-navigation/native";
import dayjs from "dayjs";
import { getPeriodDates, getDatesBetween } from "~/lib/utils";
import { ArrowUp } from "~/lib/icons";

export default function CalendarListComponent() {
  const theme = useTheme();
  const today = dayjs().format("YYYY-MM-DD");
  const [selectedDay, setSelectedDay] = useState("");
  const [isTodayVisible, setIsTodayVisible] = useState(false);
  const calendarRef = useRef(null);

  const data = [
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

  const periodDates = useMemo(() => {
    if (!data || !data.length) return {};

    return data.reduce((payload, periodData) => {
      if (periodData.periodStartingDate && periodData.periodEndingDate) {
        const datesBetween = getDatesBetween(periodData.periodStartingDate, periodData.periodEndingDate);

        datesBetween.map((date) => {
          payload[date] = {
            selected: true,
            customStyles: {
              container: {
                backgroundColor: "red",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              },
              text: {
                color: "white",
              },
            },
          };
        });
      } else {
        const datesBetween = getPeriodDates(periodData.periodStartingDate);

        datesBetween.map((date, index) => {
          if (index === 0) {
            payload[date] = {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: "red",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
                text: {
                  color: "white",
                },
              },
            };
          } else {
            payload[date] = {
              selected: true,
              customStyles: {
                container: {
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderWidth: 1,
                  borderColor: "red",
                },
                text: {
                  color: "red",
                },
              },
            };
          }
        });
      }

      return payload;
    }, {});
  }, [data]);

  const scrollToCurrentMonth = () => {
    const currentDate = dayjs().format("YYYY-MM-DD");
    calendarRef.current?.scrollToMonth(currentDate);
  };

  return (
    <View className="relative">
      <CalendarList
        ref={calendarRef}
        onDayPress={(date) => {
          setSelectedDay(date.dateString);
        }}
        onVisibleMonthsChange={(months) => {
          const isSame = dayjs(months[0].dateString, "YYYY-MM-DD").isSame(dayjs(), "month");
          setIsTodayVisible(!isSame);
        }}
        pastScrollRange={24}
        futureScrollRange={12}
        scrollEnabled={true}
        showScrollIndicator={true}
        theme={{
          backgroundColor: theme.colors.background,
          calendarBackground: theme.colors.card,
          textSectionTitleColor: theme.colors.text,
          selectedDayBackgroundColor: theme.colors.primary,
          selectedDayTextColor: "white",
          todayTextColor: "white",
          dayTextColor: theme.colors.text,
          arrowColor: theme.colors.primary,
          todayBackgroundColor: theme.colors.primary,
          todayDotColor: "white",
        }}
        markingType="custom"
        markedDates={{
          [today]: {
            marked: true,
            color: "white",
          },
          [selectedDay]: {
            selected: true,
          },
          ...periodDates,
        }}
      />
      {isTodayVisible && (
        <Pressable className="absolute bottom-10 right-10 p-4 bg-primary flex flex-row items-center gap-x-2 rounded-full" onPress={scrollToCurrentMonth}>
          <ArrowUp className="text-white font-bold" size={16} />
        </Pressable>
      )}
      <Pressable className="absolute bottom-10 self-center p-4 bg-primary flex flex-row items-center gap-x-2 rounded-full" onPress={scrollToCurrentMonth}>
        <Text className="text-white">Edit period</Text>
      </Pressable>
    </View>
  );
}
