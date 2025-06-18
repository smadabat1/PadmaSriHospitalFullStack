import { View, FlatList } from "react-native";
import React, { useMemo } from "react";
import CalculationComponentItem from "./calculationComponentItem";
import { calculateOvulationData, getCalculatedDataTitle } from "~/lib/utils";
import { calculatedDataKeys } from "~/lib/constants";

export default function CalculationComponent({ data }) {
  const flatListData = useMemo(() => {
    if (!data || !data.length) return [];
    const latestPeriodDate = data[0];
    const computedData = calculateOvulationData(latestPeriodDate.periodStartingDate);
    return Object.keys(calculatedDataKeys).reduce((payload, key, index) => {
      payload.push({
        id: index,
        key: key,
        title: getCalculatedDataTitle(key),
        value: computedData[key],
      });

      return payload;
    }, []);

  }, [data]);

  return (
    <View>
      <FlatList
        data={flatListData}
        contentContainerStyle={{ padding: 20, gap: 15 }}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => <CalculationComponentItem data={item} />}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
