import { View, Pressable } from "react-native";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginFormSchema } from "~/lib/schema";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { cn } from "~/lib/utils";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";
import CountryFlag from "react-native-country-flag";
import { Separator } from "~/components/ui/separator";

export default function Form() {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      phoneNumber: "",
    },
  });

  const inputContainerClassName = cn("flex flex-row gap-x-2 items-center border-2 rounded-md p-2", errors.phoneNumber ? "border-destructive" : "border-input");
  const calculateButtonClassName = cn("p-4 flex justify-center items-center rounded-xl", !isDirty ? "bg-primary/50" : "bg-primary");

  const loginHandler = (data) => {
    console.error(data);
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 20,
        paddingBottom: 10,
      }}
    >
      <View className="flex-1 justify-between">
        <Controller
          control={control}
          name="phoneNumber"
          render={({ field }) => (
            <View className="gap-y-2 flex-1">
              <View className={inputContainerClassName}>
                <View className="flex flex-row gap-x-2 items-center py-2">
                  <CountryFlag isoCode="in" size={25} style={{opacity: 0.8, borderRadius: 5}}/>
                  <Text className="text-lg text-muted-foreground">+91</Text>
                </View>
                <Separator orientation={"vertical"}/>
                <Input
                  value={field.value}
                  onChangeText={(text) => field.onChange(text)}
                  enterKeyHint="done"
                  keyboardType="number-pad"
                  className="flex-1 border-none"
                  style={{borderWidth: 0}}
                  {...field}
                />
              </View>
              {errors.phoneNumber && <Text className="text-destructive font-bold">{errors.phoneNumber.message}</Text>}
            </View>
          )}
        />

        <Pressable disabled={!isDirty} onPress={handleSubmit(loginHandler)} className={calculateButtonClassName}>
          <Text className="text-primary-foreground font-bold">Login</Text>
        </Pressable>
      </View>
    </KeyboardAwareScrollView>
  );
}
