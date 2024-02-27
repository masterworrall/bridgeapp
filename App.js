import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Modal } from 'react-native';
import bclogo from './assets/bclogo.webp'

import SupportCircle from './components/SupportCircle.js'

export default function App() {
  const [ isModalVisible, setIsModalVisible ] = useState(false);
  return (
    <View style={styles.container}>
      <Image source={bclogo} style={{width: 100, height: 100}}></Image>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <Button title="HELP!" onPress={() => setIsModalVisible(true)} />

      <Modal visible={isModalVisible} onRequestClose={ () => setIsModalVisible(false)} 
        animationType="slide" color="#247197">
        <View style={styles.modal}>
          <SupportCircle/>
          <Button title="Close" onPress={() => setIsModalVisible(false)} color='#22c096'/>
        </View>
      </Modal >

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
  }
});
