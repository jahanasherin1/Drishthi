import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { BACKEND_API_URL } from '../../config/api';

export default function PoliceLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Error', 'Please enter your ID and password.');
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
        if (data.user.role?.role_name !== 'Police') {
           Alert.alert('Login Failed', 'This login is for Police Officers only.');
        } else {
          Alert.alert('Success', 'Logged in successfully!');
          // UPDATED: Use 'replace' to prevent going back to the login screen
          router.replace({ pathname: '/(police)/police-dashboard', params: { officerName: data.user.name } });
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
      <Text style={styles.title}>Police Officer Login</Text>
      <TextInput style={styles.input} placeholder="Email or Police ID" placeholderTextColor="#b94e4e" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#b94e4e" secureTextEntry value={password} onChangeText={setPassword} />
      {/* UPDATED: Added 'replace' to prevent stacking auth screens */}
      <Link href="./forgot-password" style={styles.linkText} replace>
        Forgot Password?
      </Link>
      
      {loading ? (
        <ActivityIndicator size="large" color="#850a0a" style={{ marginTop: 20 }} />
      ) : (
        <CustomButton title="Login" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F8', padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 25, color: '#2B0000' },
  input: { backgroundColor: 'white', borderWidth: 1, borderColor: '#E4C4C4', borderRadius: 8, padding: 12, fontSize: 14, color: '#2B0000', marginBottom: 15 },
  linkText: { color: '#7F0E0E', textAlign: 'center', marginVertical: 15, fontSize: 14 },
});