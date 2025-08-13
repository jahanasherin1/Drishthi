import React from 'react';
import { Tabs } from 'expo-router';
import TabBarIcon from '../../components/TabBarIcon';

export default function NgoTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Hide default header to use a custom one in the dashboard
        tabBarActiveTintColor: '#850a0a',
        tabBarInactiveTintColor: '#A47171',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F0E0E0',
          paddingBottom: 5,
          paddingTop: 5,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="ngo-dashboard"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabBarIcon name="home-outline" color={color} />,
        }}
      />
      {/* ADDED: Scan & Verify tab */}
      <Tabs.Screen
        name="scan-verify"
        options={{
          title: 'Scan & Verify',
          headerShown: true, // We can show the default header for this one
          headerTitle: 'Scan & Verify',
          headerStyle: { backgroundColor: '#FFFBF8' },
          headerTitleStyle: { color: '#3A0000' },
          tabBarIcon: ({ color }) => <TabBarIcon name="scan-outline" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: true, // Show default header here too
          headerTitle: 'Profile',
          headerStyle: { backgroundColor: '#FFFBF8' },
          headerTitleStyle: { color: '#3A0000' },
          tabBarIcon: ({ color }) => <TabBarIcon name="person-outline" color={color} />,
        }}
      />
    </Tabs>
  );
}