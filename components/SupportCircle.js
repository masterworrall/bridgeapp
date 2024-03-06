import React from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native'

const SupportCircle = ({ members, onSelectMember }) => {
    function renderMemberItem({ item }) {
        return (
          <View>
            <TouchableOpacity onPress={() => onSelectMember(item)}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
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

  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      padding: 10,
      borderWidth: 1
    }
  });
  
  export default SupportCircle;