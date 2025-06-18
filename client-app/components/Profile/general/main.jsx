import { View, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { ChevronRight, Settings, Users, BellRing, Sun, Moon } from "~/lib/icons";
import { Switch } from '~/components/ui/switch';
import { storage } from "~/lib/storage";
import { useColorScheme } from "~/lib/useColorScheme";


export default function Main() {
  const { toggleColorScheme, colorScheme } = useColorScheme();

  const themeChangeHandler = async () => {
    toggleColorScheme(); //this will toggle the theme.
    storage.set("theme", colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <View className="flex gap-y-6">
      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Settings className="text-foreground" size={18} />
          </View>
          <Text>Account settings</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <Users className="text-foreground" size={18} />
          </View>
          <Text>Patient profiles</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            <BellRing className="text-foreground" size={18} />
          </View>
          <Text>Notification settings</Text>
        </View>
        <View>
          <ChevronRight className="text-foreground" size={18} />
        </View>
      </Pressable>

      <Pressable className="flex flex-row w-full items-center justify-between p-2">
        <View className="flex flex-row gap-x-4 items-center">
          <View>
            { colorScheme === "dark" ? <Moon className="text-foreground" size={18} /> : <Sun className="text-foreground" size={18} />}
          </View>
          <Text>Dark mode</Text>
        </View>
        <View>
          <Switch checked={colorScheme === "dark"} onCheckedChange={themeChangeHandler} nativeID='changeTheme'/>
        </View>
      </Pressable>
    </View>
  );
}
