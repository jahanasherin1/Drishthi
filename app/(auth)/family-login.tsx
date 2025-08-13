import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { BACKEND_API_URL } from '../../config/api';

export default function FamilyLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Error', 'Please enter both email and password.');
    }
    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Verify the user has the 'Family' role
        if (data.user.role?.role_name !== 'Family') {
          Alert.alert('Login Failed', 'This login is for family members only. Please use the correct login page.');
        } else {
          Alert.alert('Success', 'Logged in successfully!');
          // Use replace to ensure the user can't navigate back to the auth flow
          router.replace('/'); 
        }
      } else {
        Alert.alert('Login Failed', data.msg || 'Invalid credentials.');
      }
    } catch (error) {
      console.error('Login error:', error);
      Alert.alert('Connection Error', 'Could not connect to the server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Family Member Login</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        placeholderTextColor="#b94e4e" 
        value={email} 
        onChangeText={setEmail} 
        keyboardType="email-address" 
        autoCapitalize="none" 
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        placeholderTextColor="#b94e4e" 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
      />
      
      {loading ? (
        <ActivityIndicator size="large" color="#850a0a" style={{ marginTop: 20 }} />
      ) : (
        <CustomButton title="Login" onPress={handleLogin} />
      )}
      
      {/* UPDATED: Added 'replace' to prevent stacking auth screens */}
      <Link href="./family-signup" asChild replace>
        <Text style={styles.loginLink}>Don't have an account? Sign Up</Text>
      </Link>
      <Link href="./forgot-password" asChild replace>
        <Text style={styles.loginLink}>Forgot Password?</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf7f7', padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#850a0a', marginBottom: 24, textAlign: 'center' },
  input: { backgroundColor: 'white', borderRadius: 8, padding: 12, borderWidth: 1, borderColor: '#E4C4C4', marginBottom: 14 },
  loginLink: { color: '#850a0a', textAlign: 'center', marginTop: 18, fontSize: 14, padding: 10 }
});