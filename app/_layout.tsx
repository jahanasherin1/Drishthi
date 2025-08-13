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
      
      {/* 
        The following screens are route groups. They manage their own navigation stacks (like login screens)
        or tab bars (like dashboards). We list them here so the router knows they exist,
        but we hide them from appearing in the side drawer menu.
      */}
      <Drawer.Screen name="(auth)" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      <Drawer.Screen name="(police)" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      <Drawer.Screen name="(family)" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      <Drawer.Screen name="(ngo)" options={{ drawerItemStyle: { display: 'none' }, headerShown: false }} />
      
      {/* This screen is for handling pages that are not found. It should not be in the drawer. */}
      <Drawer.Screen name="+not-found" options={{ drawerItemStyle: { display: 'none' } }} />
    </Drawer>
  );
}