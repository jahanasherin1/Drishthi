import { Stack } from 'expo-router';
import React from 'react';

// This is the layout for all authentication-related screens.
// It uses a Stack navigator, which automatically provides a header with a back button.
// When a user navigates from the home screen to a login screen, this layout
// ensures the back button will correctly navigate them back to the home screen.
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF8F8' },
        headerTintColor: '#2B0000', // This styles the back arrow and title
        headerTitleStyle: { fontWeight: 'bold' }
      }}
    >
      <Stack.Screen name="family-login" options={{ title: 'Family Login' }} />
      <Stack.Screen name="family-signup" options={{ title: 'Family Signup' }} />
      <Stack.Screen name="ngo-login" options={{ title: 'NGO Login' }} />
      <Stack.Screen name="police-login" options={{ title: 'Police Login' }} />
      <Stack.Screen name="forgot-password" options={{ title: 'Forgot Password' }} />
      <Stack.Screen name="reset-password" options={{ title: 'Reset Password' }} />
    </Stack>
  );
}