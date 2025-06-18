import { View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Text } from "~/components/ui/text";
import Main from "~/components/BpTracking/main";
import { KeyboardAwareScrollView } from "react-native-keyboard-controller";

export default function Index() {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        flex: 1,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        paddingBottom: insets.bottom,
      }}
    >
    <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="flex-1 p-4 gap-y-8">
        <View>
          <Text className="font-bold text-xl">Blood Pressure</Text>
          <Text className="text-sm text-muted-foreground">Record your blood pressure level on daily basis. It'll be shared with your doctor and core team.</Text>
        </View>
        <Main />
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
