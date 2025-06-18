import { View, TouchableOpacity } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { heightFormSchema } from "~/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import { router } from "expo-router";
import { useBmiCalculationStore } from "~/lib/store/bmiCalculationStore";
import { ArrowRight } from "~/lib/icons";

export default function Form() {
  const height = useBmiCalculationStore((state) => state.height);
  const setHeight = useBmiCalculationStore((state) => state.setHeight);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(heightFormSchema),
    defaultValues: {
      height: height.toString(),
    },
  });

  const calculateHandler = (data) => {
    setHeight(data.height.toString());
    router.push("/bmiCalculation/enterWeight");
  };

  const inputClassName = cn("", errors.height ? "border-destructive" : "");

  return (
    <View className="gap-y-4 flex-1 justify-between">
      <Controller
        control={control}
        name="height"
        render={({ field }) => (
          <View className="gap-y-2">
            <Label>Height (CM)</Label>
            <Input
              value={field.value}
              onChangeText={(text) => field.onChange(text)}
              enterKeyHint="done"
              placeholder={"e.g 156"}
              keyboardType="number-pad"
              className={inputClassName}
              {...field}
            />
            {errors.height && <Text className="text-destructive font-bold">{errors.height.message}</Text>}
          </View>
        )}
      />
      {(height || isDirty) && (
        <View className="flex flex-row justify-end">
          <TouchableOpacity className="p-4 w-16 h-16 flex justify-center items-center rounded-full bg-primary" onPress={handleSubmit(calculateHandler)}>
            <ArrowRight className="text-primary-foreground" size={24} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
