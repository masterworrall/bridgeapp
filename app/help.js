import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Linking } from "react-native";
import * as Location from 'expo-location';

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

    const handleSelectMember = (supporter) => {

        // Do something with the selected supporter
        console.log('Messaging Supporter:', supporter);

        // Linking.openURL(`tel:${supporter.telephone}`);
        const message = "I need help. I am going to [?] and am here; latitude " + location['coords']['latitude'] + " , " + "longitude " + location['coords']['longitude'];
        Linking.openURL(`sms:${supporter.telephone}?body=${message}`);

    };
    return (
        <View style={styles.container}>
            <SupportCircle members={members} onSelectMember={handleSelectMember} />
        </View>
    );

}

export default help;