import { View } from "react-native";
import React, { useMemo } from "react";
import { CartesianChart, Line, useChartPressState, Area } from "victory-native";
import { LinearGradient, useFont, vec, Circle } from "@shopify/react-native-skia";
import { Text } from "~/components/ui/text";
import font from "~/assets/fonts/SpaceMono-Regular.ttf";
import { useDerivedValue } from "react-native-reanimated";

export default function BpGraph({ data }) {
  const fontHook = useFont(font, 12);
  const { state, isActive } = useChartPressState({ x: 0, y: { y: 0, z: 0} });

  const ToolTip = ({ x, y, line }) => {
    if(line === 1)
    return <Circle cx={x} cy={y} r={8} color="#7c3aed" />;

    return <Circle cx={x} cy={y} r={8} color="red" />;
  };

  const graphText = useDerivedValue(() => {
    return `${state.y.y.value.get()}/${state.y.z.value.get()} mmHg`
  }, [state]);

  const upperChartData = useMemo(() => {
    return data.map((bdata) => {
      return {
        x: bdata.id,
        y: parseInt(bdata.upper),
        z: parseInt(bdata.lower),
      };
    });
  }, [data]);

  return (
    <View style={{ height: 300 }} className="gap-y-4">
      <View>
        <Text className="font-bold">Trend</Text>
        <Text className="text-muted-foreground text-sm">
          Explore a detailed line graph illustrating your BP history, providing insights into trends over time.
        </Text>
      </View>

      <CartesianChart
        data={upperChartData}
        xKey="x"
        yKeys={["y", "z"]}
        domainPadding={{ top: 20, left: 20, right: 20, bottom: 20 }}
        frame={{ lineColor: "transparent" }}
        axisOptions={{
          lineColor: "transparent",
        }}
        chartPressState={state}
      >
        {({ points, chartBounds }) => {
          return (
            <>
              <Line points={points.y} color={"#7c3aed"} strokeWidth={3} animate={{ type: "timing", duration: 300 }} curveType="linear" />
              <Line points={points.z} color={"red"} strokeWidth={3} animate={{ type: "timing", duration: 300 }} curveType="linear" />
              {isActive && (
                <View>
                  <ToolTip x={state.x.position} y={state.y.y.position} line={1}/>
                </View>
              )}
              {isActive && (
                <View>
                  <ToolTip x={state.x.position} y={state.y.z.position} line={2}/>
                </View>
              )}
            </>
          );
        }}
      </CartesianChart>

      <Text>{graphText.get()}</Text>
    </View>
  );
}
