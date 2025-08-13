import { Drawer } from 'expo-router/drawer';
import React from 'react';

export default function RootLayout() {
  return (
    <Drawer
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF8F8' },
        headerTintColor: '#2B0000',
        headerTitleStyle: { fontWeight: 'bold' },
        drawerActiveTintColor: '#850a0a',
        drawerInactiveTintColor: '#333',
        drawerStyle: { backgroundColor: '#FFF8F8' },
      }}
    >
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: 'Home',
          title: 'Drishti',
        }}
      />
      <Drawer.Screen
        name="aboutUs"
        options={{
          drawerLabel: 'About Us',
          title: 'About Drishti',
        }}
      />
      
      {/* Reference route groups WITHOUT parentheses */}
      <Drawer.Screen name="(auth)" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      <Drawer.Screen name="(police)" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      
      <Drawer.Screen name="ngo-dashboard" options={{ drawerItemStyle: { display: 'none' }, title: 'NGO Dashboard' }} />
      <Drawer.Screen name="+not-found" options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer>
  );
}