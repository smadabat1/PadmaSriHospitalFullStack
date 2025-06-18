import { View, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { averageIntervalFormSchema } from "~/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTrackOvulationStore } from "~/lib/store/trackOvulationStore";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { cn, calculateOvulationData } from "~/lib/utils";
import { router } from "expo-router";

export default function Form() {
  const averageInterval = useTrackOvulationStore((state) => state.averageInterval);
  const setAverageInteval = useTrackOvulationStore((state) => state.setAverageInteval);
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm({
    resolver: zodResolver(averageIntervalFormSchema),
    defaultValues: {
      averageValue: averageInterval.toString(),
    },
  });

  const calculateHandler = (data) => {
    setAverageInteval(data.averageValue.toString());
    router.back();
    router.back();
  };

  const inputClassName = cn("", errors.averageValue ? "border-destructive" : "");
  const calculateButtonClassName = cn("p-4 flex justify-center items-center rounded-xl", (!averageInterval && !isDirty) ? "bg-primary/50": "bg-primary");

  return (
    <View className="gap-y-4 flex-1 justify-between">
      <Controller
        control={control}
        name="averageValue"
        render={({ field }) => (
          <View className="gap-y-2">
            <Label>Average Period Interval (days)</Label>
            <Input
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
              enterKeyHint="done"
              placeholder={"e.g 28"}
              keyboardType="number-pad"
              className={inputClassName}
              {...field}
            />
            {errors.averageValue && <Text className="text-destructive font-bold">{errors.averageValue.message}</Text>}
          </View>
        )}
      />
      <Pressable disabled={!averageInterval && !isDirty} onPress={handleSubmit(calculateHandler)} className={calculateButtonClassName}>
        <Text className="text-primary-foreground font-bold">Calculate</Text>
      </Pressable>
    </View>
  );
}
