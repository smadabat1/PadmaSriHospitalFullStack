import { Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { View } from "react-native";
import { usePurchaseStore } from "~/lib/store";

export default function Card({ item, openSheet, closeSheet }) {
  const setSelectedFeature = usePurchaseStore((state) => state.setSelectedFeature);
  return (
    <Pressable
      className="p-4 rounded-lg bg-card shadow-sm gap-y-8"
      style={{ elevation: 5 }}
      onPress={() => {
        setSelectedFeature(item);
        openSheet();
      }}
    >
      <View>
        <Text className="font-bold">{item.title}</Text>
        <Text className="text-sm text-muted-foreground">{item.description}</Text>
      </View>
      <View className="flex flex-row self-end">
        <Text className="text-primary font-bold text-2xl">{item.price}</Text>
      </View>
    </Pressable>
  );
}
