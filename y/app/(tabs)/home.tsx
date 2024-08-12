import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
 
export default function HomeScreen() {
  const router = useRouter();
 
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to About" onPress={() => router.push('/about')} color="#050404" />
        <br></br>
      <Button title="Go to contact" onPress={() => router.push('/contect')} color="#050404" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A4303F', // Fundo preto
  },
  title: {  
    fontSize: 28,
    color: '#84GF84', // Verde neon
    marginBottom: 20,
    fontFamily: 'Inter', // Fonte 'Inter'
  },
});
 