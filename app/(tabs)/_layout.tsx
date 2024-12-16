import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialCommunityIcons, Octicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Colors from '@/constants/Colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.tabIconSelected,
        tabBarInactiveTintColor: Colors.tabIconDefault,
        headerShown: false,
        tabBarBackground: () => <BlurView intensity={80} tint="dark" style={{
          height: "100%"
        }} />,
        tabBarStyle: {
          borderTopWidth: 0,
          position: "absolute"
        },
      }}>
      <Tabs.Screen
        name="(home)"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <MaterialCommunityIcons color={color} name="home-variant" size={26} />
        }}
      />
      <Tabs.Screen
        name="newAndHot"
        options={{
          title: "New & Hot",
          tabBarIcon: ({ color }) => <Octicons color={color} name="video" size={24} />
        }}
      />
      <Tabs.Screen
        name="downloads"
        options={{
          title: 'downloads',
          tabBarIcon: ({ focused, color }) => <MaterialCommunityIcons color={color} name={focused ? "download-circle" : "download-circle-outline"} size={24} />
        }}
      />
    </Tabs>
  );
}
