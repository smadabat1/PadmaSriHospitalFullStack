import { View, TouchableOpacity } from "react-native";
import React, { useMemo, useState } from "react";
import { Star } from "~/lib/icons";
import { Text } from "~/components/ui/text";
import { getRatingColor } from "~/lib/utils";
import { useAppSettingsStore } from "~/lib/store";

//rating - is an integer
export default function RatingC() {
  const totalStars = 5;
  const size = 48;
  const currentRating = useAppSettingsStore((state) => state.rating);
  const setRating = useAppSettingsStore((state) => state.setRating);

  const ratingPressHandler = (index) => {
    setRating(index + 1);
  };

  return (
    <View className="flex flex-row gap-x-4">
      {Array.from({ length: 5}).map((_, index) => (
        <TouchableOpacity key={`star-${index}`} onPress={() => ratingPressHandler(index)}>
          <Star
            size={size}
            fill={index < currentRating ? getRatingColor(currentRating) : "transparent"}
            stroke={index < currentRating ? getRatingColor(currentRating) : "#9e9e9e"}
            className="shadow-sm"
          />
        </TouchableOpacity>
      ))}
    </View>
  );
}
