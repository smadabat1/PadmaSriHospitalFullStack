import { Tabs } from "expo-router";
import React from "react";
import { useTheme } from "@react-navigation/native";
import { House, Calendar, User, Newspaper, AudioLines } from "~/lib/icons";
import { Platform } from "react-native";

export default function DashboardLayout() {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        animation: "fade",
        tabBarActiveBackgroundColor: theme.colors.card,
        tabBarActiveTintColor: theme.colors.primary,
        
        tabBarStyle: {
          position: "absolute",
          borderRadius: 50,
          bottom: Platform.OS === "ios" ? 25: 15,
          marginHorizontal: 20,
          height: Platform.OS === "ios" ? 60 : 60,
          paddingBottom: 0,
          display: 'flex',
          shadowColor: "gray",
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.3,
          shadowRadius: 5,
          backgroundColor: theme.colors.card,
          elevation: 5
        },
        tabBarItemStyle: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 15,
          paddingBottom: Platform.OS === "ios" ? 0 : undefined,
          margin: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <House color={color} />,
        }}
      />
      <Tabs.Screen
        name="appointments"
        options={{
          title: "Appt",
          tabBarIcon: ({ color }) => <Calendar color={color} />,
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: "Track",
          tabBarIcon: ({ color }) => <AudioLines color={color} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: "News",
          tabBarIcon: ({ color }) => <Newspaper color={color} />,
        }}
      />
      <Tabs.Screen
        name="(profile)"
        options={{
          title: "Account",
          tabBarIcon: ({ color }) => <User color={color} />,
        }}
      />
    </Tabs>
  );
}
