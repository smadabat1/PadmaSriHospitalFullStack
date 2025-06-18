import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider, DefaultTheme, DarkTheme, useTheme } from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { NAV_THEME } from "~/lib/constants";
import { useColorScheme } from "~/lib/useColorScheme";
import Toast from "react-native-toast-message";
import { toastConfig } from "~/components/notification";
import { storage } from "~/lib/storage";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { KeyboardProvider } from "react-native-keyboard-controller";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.extend(require("dayjs/plugin/advancedFormat"));
dayjs.extend(require("dayjs/plugin/isSameOrBefore"));

import "../global.css";

const LIGHT_THEME = {
  ...DefaultTheme,
  colors: NAV_THEME.light,
};
const DARK_THEME = {
  ...DarkTheme,
  colors: NAV_THEME.dark,
};

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

SplashScreen.preventAutoHideAsync();
SplashScreen.setOptions({
  duration: 1000,
  fade: true,
});

export default function RootLayout() {
  const { colorScheme, setColorScheme, isDarkColorScheme } = useColorScheme();
  const [isColorSchemeLoaded, setIsColorSchemeLoaded] = useState(false);
  const theme = useTheme();

  const loadTheme = async () => {
    const storedTheme = storage.getString("theme");
    if (!storedTheme) {
      storage.set("theme", "light");
      setColorScheme("light");
      setIsColorSchemeLoaded(true);
      return;
    }

    const colorTheme = storedTheme === "dark" ? "dark" : "light";
    if (colorTheme !== colorScheme) {
      setColorScheme(colorTheme);
      setIsColorSchemeLoaded(true);
      return;
    }
    setIsColorSchemeLoaded(true);
  };

  const getUserData = async () => {
    await loadTheme();
    SplashScreen.hideAsync();
  };

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <StatusBar style={isDarkColorScheme ? "light" : "dark"} animated={true} backgroundColor={theme.colors.background} />
          <KeyboardProvider>
            <SafeAreaProvider>
              <Stack
                screenOptions={{
                  headerShown: false,
                }}
              >
                <Stack.Screen name="index" />
                <Stack.Screen name="(dashboard)" />
                <Stack.Screen name="trackOvulation" />
                <Stack.Screen name="bmiCalculation" />
                <Stack.Screen name="login" />
                <Stack.Screen name="register" />
                <Stack.Screen name="verifyotp" />
                <Stack.Screen name="services" />
              </Stack>
              <PortalHost />
              <Toast config={toastConfig} />
            </SafeAreaProvider>
          </KeyboardProvider>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
