// File: /app/(auth)/_layout.tsx

import { Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  return (
    <Stack
      // FIX: Hide this Stack's own header, as the parent Drawer will now provide it.
      screenOptions={{
        headerShown: false,
      }}
    >
      {/* The titles defined here will now be used by the parent Drawer's header */}
      <Stack.Screen name="family-login" options={{ title: 'Family Login' }} />
      <Stack.Screen name="family-signup" options={{ title: 'Family Signup' }} />
      <Stack.Screen name="ngo-login" options={{ title: 'NGO Login' }} />
      <Stack.Screen name="police-login" options={{ title: 'Police Login' }} />
      <Stack.Screen name="forgot-password" options={{ title: 'Forgot Password' }} />
      <Stack.Screen name="reset-password" options={{ title: 'Reset Password' }} />
    </Stack>
  );
}