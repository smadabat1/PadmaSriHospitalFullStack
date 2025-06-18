import { View } from "react-native";
import React, { useMemo } from "react";
import MainRenderer from "./MainRenderer";
import { getDatesBetween, getPeriodDates } from "~/lib/utils";
import CalculationComponent from "./calculationComponent";

export default function Main({ data }) {
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
                  backgroundColor: "",
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

  return (
    <View className="flex-1 gap-y-4">
      <MainRenderer data={data} periodDates={periodDates} />
      <CalculationComponent data={data}/>
    </View>
  );
}
