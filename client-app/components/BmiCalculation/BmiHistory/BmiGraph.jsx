import { View } from "react-native";
import React, { useEffect, useMemo } from "react";
import { CartesianChart, Line, useChartPressState, Area } from "victory-native";
import { LinearGradient, useFont, vec, Circle, Text as SKText } from "@shopify/react-native-skia";
import { Text } from "~/components/ui/text";
import font from "~/assets/fonts/SpaceMono-Regular.ttf";
import { useDerivedValue } from "react-native-reanimated";
import { useBmiCalculationStore } from "~/lib/store/bmiCalculationStore";

export default function BmiGraph({ data }) {
  const fontHook = useFont(font, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { y: 0 } });
  const setGraphSelectedIndex = useBmiCalculationStore((state) => state.setGraphSelectedIndex);
  const bmiChartData = useMemo(() => {
    return data.map((bdata) => {
      return {
        x: bdata.id,
        y: parseFloat(bdata.bmi),
      };
    });
  }, [data]);

  const graphText = useDerivedValue(() => {
      return `${state.y.y.value.get()}`;
  }, [state]);

  const selectedIndex = useDerivedValue(() => {
    return state.x.value.get();
}, [state]);
  
  useEffect(() => {
    setGraphSelectedIndex(selectedIndex.get());
  }, [selectedIndex.get()]);

  const ToolTip = ({ x, y }) => {
    return <Circle cx={x} cy={y} r={8} color="black" />;
  };

  //<SKText x={chartBounds.left + 30} y={40} font={fontHook} text={graphText} color={"black"} style={"fill"}/>

  return (
    <View style={{ height: 300 }} className="gap-y-4">
      <View>
        <Text className="font-bold">Trend</Text>
        <Text className="text-muted-foreground text-sm">
          Explore a detailed line graph illustrating your BMI history, providing insights into trends over time.
        </Text>
      </View>

      <CartesianChart
        data={bmiChartData}
        xKey="x"
        yKeys={["y"]}
        domainPadding={{ top: 20, left: 2, right: 2, bottom: 2 }}
        frame={{ lineColor: "transparent" }}
        axisOptions={{
          lineColor: "transparent",
        }}
        chartPressState={state}
      >
        {({ points, chartBounds }) => {
          return (
            <>
              
              <Line points={points.y} color={"#7c3aed"} strokeWidth={3} animate={{ type: "timing", duration: 300 }} curveType="natural" />
              <Area points={points.y} y0={chartBounds.bottom} animate={{ type: "timing", duration: 300 }} curveType="natural">
                <LinearGradient start={vec(chartBounds.bottom, 200)} end={vec(chartBounds.bottom, chartBounds.bottom)} colors={["#bc9af5", "#d6c1f9"]} />
              </Area>
              {isActive && (
                <View>
                  <ToolTip x={state.x.position} y={state.y.y.position} />
                </View>
              )}
            </>
          );
        }}
      </CartesianChart>
    </View>
  );
}
