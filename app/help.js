import React, { useState, useEffect } from 'react';
import { View } from "react-native";
import * as Location from 'expo-location';
import * as SMS from 'expo-sms';

import { styles } from '../globals/styles.js'

import SupportCircle from '../components/SupportCircle.js';

const help = () => {

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

      const [location, setLocation] = useState(null);
      const [errorMsg, setErrorMsg] = useState(null);
    
    // Need try catch here!
    // https://interition.atlassian.net/browse/BCTA-73
    useEffect(() => {
        (async () => {
          
          let { status } = await Location.requestForegroundPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
        })();
      }, []);
    
      console.log('Waiting..');
      if (errorMsg) {
        console.log('errorMsg');
      } else if (location) {
        console.log(JSON.stringify(location));
      }

      const sendSms = async (telephone,message) => {
        console.log("sending ");
        const {result} = await SMS.sendSMSAsync(
          [telephone],
          message
        );
      }

    const handleSelectMember = (supporter) => {

        // Linking.openURL(`tel:${supporter.telephone}`);
        const url = "https://www.google.com/maps/@?api=1&map_action=map&query=" + location['coords']['latitude'] + "%" + location['coords']['longitude'];
        const message = "Hi, I need help. I am here " + url ;
        console.log(message);
        sendSms(supporter.telephone,message);
        
    };
    return (
        <View style={styles.container}>
            <SupportCircle members={members} onSelectMember={handleSelectMember} />
        </View>
    );

}

export default help;