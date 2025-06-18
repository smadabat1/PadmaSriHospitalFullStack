import { Pressable, View, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import { Text } from "~/components/ui/text";
import dayjs from "dayjs";
import { router } from "expo-router";
import { calculateOvulationData } from "~/lib/utils";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "@react-navigation/native";

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    backgroundColor: "white",
    width: "135%",
    height: "100%",
    zIndex: 0,
    borderRadius: 9999, // Large value to make it circular
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: 999,
  },
});

//data - is a list of objects
export default function MainRenderer() {
  const theme = useTheme();
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

  const previousPeriodData = data.length ? data[0] : undefined; //latest period data.

  const calculateData = useMemo(() => {
    if (previousPeriodData) {
      return calculateOvulationData(previousPeriodData?.periodStartingDate);
    }

    return undefined;
  }, [previousPeriodData]);

  const periodDataAvailable = () => {
    return (
      <View className="flex justify-center items-center">
        <Text className="font-semibold text-muted-foreground">Late for</Text>
        <Text className="font-bold text-4xl">2 days</Text>
      </View>
    );
  };

  const periodDataUnavailable = () => {
    return (
      <View className="flex justify-center items-center">
        <Text className="font-semibold text-muted-foreground text-center">Log the first day of your previous period for better calculations</Text>
      </View>
    );
  };
  return (
    <View className="h-1/3">
      <View className="flex flex-1 justify-center items-center relative">
        <View className="z-10 flex justify-center items-center gap-y-4">
          {data?.length !== 0 ? periodDataAvailable() : periodDataUnavailable()}
          <View>
            <Pressable className="rounded-full bg-primary p-2 px-4" onPress={() => router.push("/trackOvulation/selectDate")}>
              <Text className="text-sm text-primary-foreground font-semibold">Log period</Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.container}>
          <LinearGradient
            colors={[theme.colors.background, "#b692f5", "rgba(124, 58, 237, 0.6)"]}
            start={{ x: 0, y: 0.4 }} // Start from middle-top
            end={{ x: 0, y: 1 }}
            style={styles.gradient}
          />
        </View>
      </View>
    </View>
  );
}

//w-[150%] h-[180%]
