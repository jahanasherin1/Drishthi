import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

// This is the main tab layout for the police section of the app.
export default function PoliceTabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF8F8' },
        headerTintColor: '#2B0000',
        headerTitleStyle: { fontWeight: 'bold' },
        tabBarActiveTintColor: '#3A0000',
        tabBarInactiveTintColor: '#A47171',
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopColor: '#F0E0E0',
        },
      }}
    >
      <Tabs.Screen
        name="police-dashboard"
        options={{
          title: 'Police Dashboard',
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="alerts"
        options={{
          title: 'Alerts',
          tabBarIcon: ({ color, size }) => <Ionicons name="notifications-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="face-search"
        options={{
          title: 'Face Search',
          tabBarIcon: ({ color, size }) => <Ionicons name="scan-circle-outline" color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="user-profile"
        options={{
          title: 'User Profile',
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => <Ionicons name="person-outline" color={color} size={size} />,
        }}
      />
      
      {/* These screens are part of the police stack but are not shown in the tab bar */}
      <Tabs.Screen name="reports" options={{ href: null, title: 'Reports' }} />
      <Tabs.Screen name="statistics" options={{ href: null, title: 'Statistics' }} />
    </Tabs>
  );
}