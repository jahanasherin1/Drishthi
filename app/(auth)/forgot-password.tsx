import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton'; // USE RELATIVE PATH

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleNext = () => {
    if (!email) {
      Alert.alert('Missing Email', 'Please enter your email.');
    } else {
      // Logic to send reset email/link would go here
      Alert.alert('Password Reset', `If an account exists for ${email}, a reset link has been sent.`);
      router.back(); // Go back to previous screen
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      <Text style={styles.label}>Enter your registered Email</Text>
      <TextInput style={styles.input} placeholder="Enter your email" placeholderTextColor="#b94e4e" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <CustomButton title="Send Reset Link" onPress={handleNext} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FCF7F7', padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#2B0000'},
  label: { fontSize: 14, fontWeight: '600', marginBottom: 8, color: '#000' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#E4C4C4', borderRadius: 8, padding: 12 },
});