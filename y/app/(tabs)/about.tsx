import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function AboutScreen() {
    const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.description}>
        This is the About Screen with some interesting facts and details about the app.
      </Text>
      <Button title="Voltar" onPress={() => router.push('/home')} color="#050404" />
        <br></br>
      <Button title="Go to contect" onPress={() => router.push('/contect')} color="#050404" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A4303F', // Verde escuro
    padding: 20,
  },
  title: {
    fontSize: 28,
    color: '#86FF84', // Verde neon
    marginBottom: 20,
    fontFamily: 'Inter', // Fonte 'Inter'
  },
  description: {
    fontSize: 16,
    color: '#FFF', // Branco
    textAlign: 'center',
    fontFamily: 'Love Light', // Fonte 'Love Light',
    paddingBottom: 10,
  },
});