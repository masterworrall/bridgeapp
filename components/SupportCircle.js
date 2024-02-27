import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native'


const SupportCircle = ({ members, onSelectMember }) => {
    function renderMemberItem({ item }) {
        return (
            <TouchableOpacity onPress={() => onSelectMember(item)}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <Text>Name: {item.name}</Text>
                    <Text>Role: {item.role}</Text>
                    <Text>Telephone: {item.telephone}</Text>
                </View>
            </TouchableOpacity>
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