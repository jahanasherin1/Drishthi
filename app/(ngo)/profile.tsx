import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import CustomButton from '../.././components/CustomButton';

export default function ProfileScreen() {
  const router = useRouter();

  const handleLogout = () => {
    // This will clear the navigation history and send the user back to the home screen
    router.replace('/'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Profile</Text>
      <Text style={styles.info}>
        Here you can manage your account details, change your password, and view your saved information.
      </Text>
      <CustomButton
        title="Logout"
        onPress={handleLogout}
        style={{ backgroundColor: '#c93c3c', marginTop: 30 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#FFFBF8',
    padding: 20,
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20, 
    color: '#3A0000' 
  },
  info: {
    fontSize: 16,
    color: '#5B4242',
    textAlign: 'center',
    lineHeight: 24,
  }
});