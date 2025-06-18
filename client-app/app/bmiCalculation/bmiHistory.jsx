import { View, FlatList } from "react-native";
import React, { useEffect, useRef } from "react";
import BmiHistoryItem from "~/components/BmiCalculation/BmiHistory/BmiHistoryItem";
import BmiGraph from "~/components/BmiCalculation/BmiHistory/BmiGraph";
import { useBmiCalculationStore } from "~/lib/store/bmiCalculationStore";

export default function BmiHistory() {
  const data = [
    {
      id: 1,
      height: "156",
      weight: "56",
      bmi: "23.01",
      date: "2024-12-25",
    },
    {
      id: 2,
      height: "170",
      weight: "70",
      bmi: "24.22",
      date: "2024-11-23",
    },
    {
      id: 3,
      height: "120",
      weight: "100",
      bmi: "69.44",
      date: "2024-10-01",
    },
    {
      id: 4,
      height: "120",
      weight: "100",
      bmi: "20.44",
      date: "2024-10-01",
    },
    {
      id: 5,
      height: "120",
      weight: "100",
      bmi: "28.44",
      date: "2024-10-01",
    },
    {
      id: 6,
      height: "120",
      weight: "100",
      bmi: "10.44",
      date: "2024-10-01",
    },
    {
      id: 7,
      height: "120",
      weight: "100",
      bmi: "37.44",
      date: "2024-10-01",
    },
  ];
  const flatListRef = useRef(null);
  const graphSelectedIndex = useBmiCalculationStore((state) => state.graphSelectedIndex);

  const scrollToIndex = () => {
    if(isNaN(graphSelectedIndex) || graphSelectedIndex < 0) return;

    const flIndex = data.findIndex((flItem) => flItem.id === graphSelectedIndex);

    if(isNaN(flIndex) || flIndex < 0 || flIndex >= data.length) return;

    setTimeout(() => flatListRef.current?.scrollToIndex({
      index: flIndex,
      animated: true,
      viewPosition: 0
    }), 200);
  }

  useEffect(() => {
    console.log({graphSelectedIndex});
    scrollToIndex();
  }, [graphSelectedIndex]);
  

  return (
    <View className="p-4 flex-1 gap-y-4">
      <BmiGraph data={data} />
      <FlatList
        ref={flatListRef}
        extraData={graphSelectedIndex}
        data={data}
        renderItem={({ item }) => <BmiHistoryItem item={item} graphSelectedIndex={graphSelectedIndex}/>}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 20,
          padding: 2,
        }}
        contentInset={{
            bottom: 50
        }}
        getItemLayout={(data, index) => ({
          length: 130, // Height of each item
          offset: 130 * index,
          index,
        })}
      />
    </View>
  );
}
