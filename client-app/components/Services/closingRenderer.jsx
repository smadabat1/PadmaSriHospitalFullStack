import { View } from "react-native";
import React from "react";
import { Text } from "~/components/ui/text";

export default function ClosingRenderer({ closing }) {
  return (
    <View className="gap-y-8">
      {closing.map((closingElement, index) => (
        <View key={`service_closingElement_${index}`}>
          <Text>{closingElement}</Text>
        </View>
      ))}
    </View>
  );
}
