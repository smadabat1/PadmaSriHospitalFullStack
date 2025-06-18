import { Pressable, View } from "react-native";
import { MotiView } from "moti";
import { Text } from "~/components/ui/text";
import { useServicesStore } from "~/lib/store";

export default function Card({ item, openSheet, closeSheet }) {
  const setSelectedService = useServicesStore((state) => state.setSelectedService);
  return (
    <Pressable
      className="bg-card p-4 my-4 h-40 justify-between rounded-xl shadow-sm"
      style={{ elevation: 5 }}
      onPress={() => {
        setSelectedService(item);
        openSheet();
      }}
    >
      <View className="flex flex-row justify-between items-center">
        <Text className="font-bold">{item.title}</Text>
        {item.isSpecial && (
          <MotiView from={{ scale: 1 }} animate={{ scale: 0.7 }} transition={{ type: "timing", duration: 600, delay: 100, loop: true }}>
            <Text className="text-sm text-orange-500 font-bold">SPECIAL</Text>
          </MotiView>
        )}
      </View>
      <Text>{item.subtitle}</Text>
    </Pressable>
  );
}
