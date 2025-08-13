import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import CustomButton from '../../components/CustomButton';

export default function PoliceLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      return Alert.alert('Demo', 'Please enter any ID and password to proceed.');
    }

    console.log("Simulating successful police login...");
    // Use 'replace' to prevent going back to the login screen
    // Pass a dummy name for the dashboard.
    router.replace({ pathname: '/(police)/police-dashboard', params: { officerName: 'Demo Officer' } });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Police Officer Login</Text>
      <TextInput style={styles.input} placeholder="Email or Police ID" placeholderTextColor="#b94e4e" value={email} onChangeText={setEmail} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#b94e4e" secureTextEntry value={password} onChangeText={setPassword} />
      <Link href="./forgot-password" style={styles.linkText} replace>
        Forgot Password?
      </Link>
      
      <CustomButton title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF8F8', padding: 20, justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 25, color: '#2B0000' },
  input: { backgroundColor: 'white', borderWidth: 1, borderColor: '#E4C4C4', borderRadius: 8, padding: 12, fontSize: 14, color: '#2B0000', marginBottom: 15 },
  linkText: { color: '#7F0E0E', textAlign: 'center', marginVertical: 15, fontSize: 14 },
});