import React from 'react';
import { useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Modal, Linking } from 'react-native';
import bclogo from './assets/bclogo.webp'

import SupportCircle from './components/SupportCircle.js'

export default function App() {
  const [ isModalVisible, setIsModalVisible ] = useState(false);

  const members = [
    {
      id: 1,
      name: 'Ben Tinkler',
      role: 'Dad',
      telephone: '+447984516038',
    },
    {
      id: 2,
      name: 'Paul Worrall',
      role: 'Mum',
      telephone: '+447711330213',
    },
    {
      id: 3,
      name: 'Michael Johnson',
      role: 'Support Worker',
      telephone: '555-9101',
    },
  ];

  const handleSelectMember = (supporter) => {
    // Do something with the selected supporter
    console.log('Calling Supporter:', supporter);

    // make a call to the number of the support circle member

   // Linking.openURL(`tel:${supporter.telephone}`);
   const message = "I need help. I am going to [?] and am here [?]"
    Linking.openURL(`sms:${supporter.telephone}?body=${message}`);

  };

  return (
    <View style={styles.container}>
      <Image source={bclogo} style={{width: 100, height: 100}}></Image>
      {/* <Text>Open up App.js to start working on your app!</Text> */}

      <Button title="HELP!" onPress={() => setIsModalVisible(true)} />

      <Modal visible={isModalVisible} onRequestClose={ () => setIsModalVisible(false)} 
        animationType="slide" color="#247197">
        <View style={styles.modal}>

          <SupportCircle members={members} onSelectMember={handleSelectMember} />

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
