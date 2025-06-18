import { View, Dimensions } from "react-native";
import React from "react";
import Carousel from "react-native-reanimated-carousel";
import CarouselItem from "./CarouselItem";

export default function ServicesCarousel() {
  const width = Dimensions.get("screen").width - 32;
  const data = [
    {
      id: 1,
      title: "Gynecology & Obstetrics",
      subtitle: "Comprehensive care for women's reproductive health, including prenatal care, childbirth, and gynecological issues."
    },
    {
      id: 2,
      title: "High Risk Pregnancy",
      subtitle: "Specialized care and monitoring for pregnant women with pre-existing medical conditions or pregnancy-related complications."
    },
    {
      id: 3,
      title: "In Vitro Fertilization (IVF)",
      subtitle: "Fertilization of eggs with sperm outside the body, followed by embryo transfer into the uterus for pregnancy."
    },
    {
      id: 4,
      title: "Surrogacy",
      subtitle: "An arrangement where a woman carries and delivers a child for another couple or individual, helping them achieve parenthood."
    },
  ];
  return (
    <View className="flex-1">
      <Carousel
        width={width}
        autoPlay
        height={width/2}
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
