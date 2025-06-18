import { View, Dimensions, Platform } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import React from "react";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";

const ItemRenderer = ({ item }) => {
  const cardClassname = cn("p-4 rounded-xl mx-4 gap-y-4", item.id === 1 ? "bg-pastel1" : item.id === 2 ? "bg-pastel2" : "bg-pastel3");
  return (
    <View className={cardClassname} style={{ height: "100%", maxWidth: Dimensions.get("window").width - Platform.select({ ios: 64, android: 80 }) }}>
      <View>
        <Text className="font-bold text-xl">{item.title}</Text>
        <Text className="font-bold text-muted-foreground">{item.subtitle}</Text>
      </View>
      <View>
        <Text>{item.focus}</Text>
      </View>
      <View>
        <Text className="font-bold">{item.nutritional_priorities.title}</Text>
        <View>
          {item.nutritional_priorities.value.map((p) => (
            <View key={`nutriotional_priority_${p.id}`}>
              <Text>
                {`\u2022`} {p.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
      <View>
        <Text className="font-bold">{item.other.title}</Text>
        <View>
          {item.other.value.map((p) => (
            <View key={`other_${p.id}`}>
              <Text>
                {`\u2022`} {p.title}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default function TrimesterList() {
  const data = [
    {
      id: 1,
      title: "First Trimester",
      subtitle: "(Days 1-90)",
      focus: "Foundational nutrition and embryonic development",
      nutritional_priorities: {
        title: "Critical Nutritional Priorities",
        value: [
          {
            id: 1,
            title: "Folic acid supplementation",
          },
          {
            id: 2,
            title: "Preventing neural tube defects",
          },
          {
            id: 3,
            title: "Managing early pregnancy nausea",
          },
          {
            id: 4,
            title: "Building initial nutrient reserves",
          },
        ],
      },
      other: {
        title: "Metabolic Adaptations",
        value: [
          {
            id: 1,
            title: "Supporting hormonal changes",
          },
          {
            id: 2,
            title: "Mitigating potential nutrient deficiencies",
          },
          {
            id: 3,
            title: "Establishing healthy eating patterns",
          },
        ],
      },
    },
    {
      id: 2,
      title: "Second Trimester",
      subtitle: "(Days 91-210)",
      focus: "Accelerated fetal growth and maternal adaptation",
      nutritional_priorities: {
        title: "Critical Nutritional Priorities",
        value: [
          {
            id: 1,
            title: "Increased protein intake",
          },
          {
            id: 2,
            title: "Calcium and iron-rich diet",
          },
          {
            id: 3,
            title: "Supporting rapid fetal tissue development",
          },
        ],
      },
      other: {
        title: "Physiological Considerations",
        value: [
          {
            id: 1,
            title: "Managing weight gain",
          },
          {
            id: 2,
            title: "Addressing potential gestational diabetes risks",
          },
          {
            id: 3,
            title: "Enhancing maternal energy levels",
          },
        ],
      },
    },
    {
      id: 3,
      title: "Third Trimester",
      subtitle: "(Days 211-300)",
      focus: "Preparation for delivery and final developmental stages",
      nutritional_priorities: {
        title: "Critical Nutritional Priorities",
        value: [
          {
            id: 1,
            title: "Maximizing nutrient density",
          },
          {
            id: 2,
            title: "Supporting immune system",
          },
          {
            id: 3,
            title: "Preparing body for lactation",
          },
        ],
      },
      other: {
        title: "Strategic Nutritional Interventions",
        value: [
          {
            id: 1,
            title: "Omega-3 fatty acid optimization",
          },
          {
            id: 2,
            title: "Reducing inflammation",
          },
          {
            id: 3,
            title: "Supporting optimal birth weight",
          },
        ],
      },
    },
  ];
  return (
    <View className="flex-1">
      <FlatList
        keyExtractor={(item) => item.id}
        data={data}
        estimatedItemSize={3}
        renderItem={({ item }) => <ItemRenderer item={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      />
    </View>
  );
}
