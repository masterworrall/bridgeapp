import { View, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { styles } from '../globals/styles.js';


const helpers = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.text}>Way - create, edit and delete journeys here!</Text>
    </View>
    );

}
export default helpers;