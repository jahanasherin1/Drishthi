// /config/api.js

import { Platform } from 'react-native';
// Replace with your computer's actual local IP address.
const IP_ADDRESS = '192.168.1.105'; // <-- UPDATE THIS VALUE IF IT CHANGED




// Use 'localhost' for web and the IP for mobile
const API_HOST = Platform.OS === 'web' ? 'localhost' : MOBILE_IP_ADDRESS;

// Construct the final URLs
export const AI_API_URL = `http://${API_HOST}:8000`;
export const BACKEND_API_URL = `http://${API_HOST}:5000`;