import { View, Pressable } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { router } from "expo-router";
import { ArrowRight } from "~/lib/icons";
import { useBsTrackingStore } from "~/lib/store";
import bsFormSchema from "~/lib/schema/bsSchema";

export default function Form() {
  const day = useBsTrackingStore((state) => state.day);
  const time = useBsTrackingStore((state) => state.time);

  const setBeforeMeal = useBsTrackingStore((state) => state.setBeforeMeal);
  const setAfterMeal = useBsTrackingStore((state) => state.setAfterMeal);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(bsFormSchema),
    defaultValues: {
      beforeMeal: "",
      afterMeal: "",
    },
  });

  const calculateHandler = (data) => {
    setBeforeMeal(data.beforeMeal);
    setBeforeMeal(data.afterMeal);
  };

  const inputClassName = cn("", errors.beforeMeal || errors.afterMeal ? "border-destructive" : "");
  const calculateButtonClassName = cn("p-4 flex justify-center items-center rounded-xl", !day && !time && !isDirty ? "bg-primary/50" : "bg-primary");

  return (
    <View className="flex-1 justify-between">
      <View className="gap-y-4">
        <Controller
          control={control}
          name="beforeMeal"
          render={({ field }) => (
            <View className="gap-y-2">
              <Label>
                Before Meal <Text className="text-muted-foreground">(mg/dL)</Text>
              </Label>
              <Input
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
                enterKeyHint="done"
                placeholder={"120"}
                keyboardType="number-pad"
                className={inputClassName}
                {...field}
              />
              {errors.beforeMeal && <Text className="text-destructive font-bold">{errors.beforeMeal.message}</Text>}
            </View>
          )}
        />
        <Controller
          control={control}
          name="afterMeal"
          render={({ field }) => (
            <View className="gap-y-2">
              <Label>
                After Meal <Text className="text-muted-foreground">(mg/dL)</Text>
              </Label>
              <Input
                value={field.value}
                onChangeText={(text) => field.onChange(text)}
                enterKeyHint="done"
                placeholder={"80"}
                keyboardType="number-pad"
                className={inputClassName}
                {...field}
              />
              {errors.afterMeal && <Text className="text-destructive font-bold">{errors.afterMeal.message}</Text>}
            </View>
          )}
        />
      </View>

      <Pressable disabled={!day && !time && !isDirty} onPress={handleSubmit(calculateHandler)} className={calculateButtonClassName}>
        <Text className="text-primary-foreground font-bold">Calculate</Text>
      </Pressable>
    </View>
  );
}
