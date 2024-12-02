import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('../SignUpScreen'); // Navigates to the signup screen
  };

  return (
    <View style={styles.container}>
      <Video
        source={require('../assets/videos/welcome-animation.mp4')}
        style={styles.backgroundVideo}
        shouldPlay
        isLooping
        resizeMode="cover"
        onError={(error) => console.error("Video playback error:", error)}
      />
      <View style={styles.overlay}>
        <TouchableOpacity
          style={styles.button}
          onPress={handleGetStarted}
          accessibilityLabel="Get Started Button"
          accessibilityHint="Navigates to the signup screen"
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fallback background color
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Slight overlay for better text contrast
  },
  button: {
    backgroundColor: '#7ed957',
    padding: 15,
    borderRadius: 8, // More rounded corners
    width: '70%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 3, // Elevated look for Android
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});