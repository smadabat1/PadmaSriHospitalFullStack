import { View, Pressable } from "react-native";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import bpFormSchema from "~/lib/schema/bpSchema";
import { Label } from "~/components/ui/label";
import { Text } from "~/components/ui/text";
import { Input } from "~/components/ui/input";
import { cn } from "~/lib/utils";
import { router } from "expo-router";
import { ArrowRight } from "~/lib/icons";
import { useBpTrackingStore } from "~/lib/store/bpTracking";

export default function Form() {
  const day = useBpTrackingStore((state) => state.day);
  const time = useBpTrackingStore((state) => state.time);

  const upper = useBpTrackingStore((state) => state.upper);
  const setUpper = useBpTrackingStore((state) => state.setUpper);

  const lower = useBpTrackingStore((state) => state.lower);
  const setLower = useBpTrackingStore((state) => state.setLower);

  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(bpFormSchema),
    defaultValues: {
      higher: "",
      lower: "",
    },
  });

  const calculateHandler = (data) => {
    setUpper(data.higher);
    setLower(data.lower);
  };

  const inputClassName = cn("", errors.higher || errors.lower ? "border-destructive" : "");
  const calculateButtonClassName = cn("p-4 flex justify-center items-center rounded-xl", (!day && !time && !isDirty) ? "bg-primary/50" : "bg-primary");

  return (
    <View className="flex-1 justify-between">
      <View className="gap-y-4">
        <Controller
          control={control}
          name="higher"
          render={({ field }) => (
            <View className="gap-y-2">
              <Label>
                Systolic <Text className="text-muted-foreground">(Upper Number)</Text>
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
              {errors.higher && <Text className="text-destructive font-bold">{errors.higher.message}</Text>}
            </View>
          )}
        />
        <Controller
          control={control}
          name="lower"
          render={({ field }) => (
            <View className="gap-y-2">
              <Label>
                Diastolic <Text className="text-muted-foreground">(Lower Number)</Text>
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
              {errors.lower && <Text className="text-destructive font-bold">{errors.lower.message}</Text>}
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
