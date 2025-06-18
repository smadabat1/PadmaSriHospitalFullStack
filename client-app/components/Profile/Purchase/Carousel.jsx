import { View, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import CarouselItem from "./CarouselItem";

export default function UIItemsCarousel() {
  const width = Dimensions.get("screen").width - 32;
  const data = [
    {
      id: 1,
      title: "Screen 1",
    },
    {
      id: 2,
      title: "Screen 2",
    },
    {
      id: 3,
      title: "Screen 3",
    },
  ];
  return (
    <View className="flex-1">
      <Carousel
        width={width}
        height={width}
        data={data}
        mode="parallax"
        scrollAnimationDuration={5000}
        renderItem={({ item, index }) => <CarouselItem item={item} index={index} />}
        panGestureHandlerProps={{
          activeOffsetX: [-10, 10],
        }}
        modeConfig={{
          parallaxScrollingScale: 1,
          parallaxScrollingOffset: 10,
          parallaxAdjacentItemScale: 0.8,
        }}
      />
    </View>
  );
}
