import { Image, StyleSheet, View} from 'react-native';

import Home from './home'

export default function HomeScreen() {
  return (
   
    <View style={styles.Container} >
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  },
});
