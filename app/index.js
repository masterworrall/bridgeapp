
import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Pressable } from 'react-native';
import bclogo from '../assets/bclogo.webp';

import { Link } from 'expo-router';

import { styles } from '../globals/styles.js'

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

