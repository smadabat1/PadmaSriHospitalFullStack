import { View } from "react-native";
import React, { useMemo } from "react";
import { Text } from "~/components/ui/text";
import { RadialSlider } from "react-native-radial-slider";
import { useTheme } from "@react-navigation/native";
import { bmiClassification, getBmiSliderColor } from "~/lib/utils";

export default function Main({ data }) {
  const radialData = (data && data.length) ? data[0].bmi : 0;
  const selectedData = useMemo(() => bmiClassification(radialData), [radialData]);
  const colorData = useMemo(() => getBmiSliderColor(selectedData), [selectedData]);
  const theme = useTheme();
  return (
    <View>
      <View className="flex justify-center items-center">
        <RadialSlider
          value={radialData}
          min={0}
          thumbRadius={10}
          thumbColor={colorData.tc}
          linearGradient={colorData.lg}
          markerLineSize={20}
          needleHeight={30}
          subTitle={selectedData.subtitle}
          markerCircleSize={50}
          markerValue={50}
          isHideButtons
          isHideMarkerLine
          unit=""
          max={50}
          lineSpace={5}
          valueStyle={{
            color: theme.colors.text
          }}
          fixedMarker
          disabled={true}
        />
      </View>
    </View>
  );
}
