import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

import { styles } from '../globals/styles.js';

const SupportCircle = ({ members, onSelectMember }) => {
    function renderMemberItem({ item }) {
        return (
          <View style={styles.container}>
            <TouchableOpacity onPress={() => onSelectMember(item)}>
                <View style={styles.helper}>
                    <Text>Name: {item.name}</Text>
                    <Text>Role: {item.role}</Text>
                    <Text>Telephone: {item.telephone}</Text>
                </View>
            </TouchableOpacity>
          </View>
        );
    }
  
    return (
      <FlatList
        data={members}
        renderItem={renderMemberItem}
        keyExtractor={(item) => item.id.toString()}
      />
    );
  };
  
  export default SupportCircle;