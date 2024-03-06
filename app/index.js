
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import bclogo from '../assets/bclogo.webp';

import { router, Link } from 'expo-router';

export default function App() {

  return (
    <View style={styles.container}>
      <Image source={bclogo} style={{width: 100, height: 100}}></Image>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <Link href="/help" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Help</Text>
      </Pressable>
      </Link>

      <Link href="/helpers" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.text}>Helpers</Text>
        </Pressable >
      </Link>

      <Link href="/journeys" asChild>
      <Pressable style={styles.button}>
        <Text style={styles.text}>Journeys</Text>
      </Pressable>
      </Link>

        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#247212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    backgroundColor: '#22c096',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
