// app/404.tsx
import { Unmatched } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function Custom404() {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Page Not Found</Text>
      <Unmatched />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    fontSize: 20,
    color: 'red',
    marginBottom: 20,
  },
});
