import { View, Pressable } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { weightFormSchema } from "~/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { router } from "expo-router";
import { useBmiCalculationStore } from "~/lib/store/bmiCalculationStore";

export default function Form() {
  const weight = useBmiCalculationStore((state) => state.weight);
  const setWeight = useBmiCalculationStore((state) => state.setWeight);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(weightFormSchema),
    defaultValues: {
      weight: weight.toString(),
    },
  });

  const calculateHandler = (data) => {
    setWeight(data.weight.toString());
    router.back();
    router.back();
  };

  const inputClassName = cn("", errors.weight ? "border-destructive" : "");
  const calculateButtonClassName = cn("p-4 flex justify-center items-center rounded-xl", (!weight && !isDirty) ? "bg-primary/50": "bg-primary");

  return (
    <View className="gap-y-4 flex-1 justify-between">
      <Controller
        control={control}
        name="weight"
        render={({ field }) => (
          <View className="gap-y-2">
            <Label>Weight (KG)</Label>
            <Input
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
              enterKeyHint="done"
              placeholder={"e.g 56"}
              keyboardType="number-pad"
              className={inputClassName}
              {...field}
            />
            {errors.weight && <Text className="text-destructive font-bold">{errors.weight.message}</Text>}
          </View>
        )}
      />

      <Pressable disabled={!weight && !isDirty} onPress={handleSubmit(calculateHandler)} className={calculateButtonClassName}>
        <Text className="text-primary-foreground font-bold">Calculate</Text>
      </Pressable>
    </View>
  );
}
