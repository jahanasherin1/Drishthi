import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
// Corrected import: Use named import for AI_API_URL
import { AI_API_URL } from '../config/api'; 
import CustomButton from '../components/CustomButton';

type MatchResponse = {
  match: boolean;
  distance?: number;
  reason?: string;
  error?: string;
};

export default function NgoDashboardScreen() {
  const { ngoName } = useLocalSearchParams<{ ngoName?: string }>();

  const pickImageAndMatch = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert("Permission Denied", "You've refused to allow this app to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      const uri = result.assets[0].uri;
      const formData = new FormData();
      
      formData.append('file', {
        uri,
        name: `photo_${Date.now()}.jpg`,
        type: 'image/jpeg',
      } as any);

      try {
        Alert.alert('Matching...', 'Sending image to AI service. Please wait.');
        // Corrected usage: Use the imported AI_API_URL
        const response = await fetch(`${AI_API_URL}/match_face`, { 
          method: 'POST',
          body: formData,
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const data: MatchResponse = await response.json();

        if (response.ok) {
            if(data.match) {
                Alert.alert('Match Found!', `A potential match was found with a distance of ${data.distance?.toFixed(2)}.`);
            } else {
                Alert.alert('No Match', `No match found. Reason: ${data.reason || 'Distance too high'}`);
            }
        } else {
            Alert.alert('API Error', data.error || 'Something went wrong on the server.');
        }

      } catch (error) {
        console.error('Error matching face:', error);
        Alert.alert('Connection Error', 'Could not connect to the AI service. Make sure the server is running and your IP in `config/api.js` is correct.');
      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>NGO Dashboard</Text>
      <Text style={styles.welcome}>Welcome back, {ngoName || 'Volunteer'} 👋</Text>
      <Text style={styles.sectionTitle}>AI Actions</Text>
      <CustomButton
        title="Scan Image for a Match"
        onPress={pickImageAndMatch}
      />
      <Text style={styles.info}>
        This will open your photo library. Select an image of a person to check if they are in the known database.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fcf7f7', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', color: '#231815', marginBottom: 8 },
  welcome: { fontSize: 18, color: '#A47171', marginBottom: 24 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#231815', marginTop: 18, marginBottom: 8 },
  info: { fontSize: 14, color: '#A47171', textAlign: 'center', marginTop: 12, lineHeight: 20 },
});