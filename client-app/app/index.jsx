import { View } from "react-native";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap:20
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button onPress={()=> router.push("/(dashboard)/home")}><Text>Dashboard</Text></Button>
      <Button onPress={()=> router.push("/login")}><Text>Login</Text></Button>
      <Button onPress={()=> router.push("/register")}><Text>Register</Text></Button>
      <Button onPress={()=> router.push("/verifyotp")}><Text>Verifyotp</Text></Button>
    </View>
  );
}
