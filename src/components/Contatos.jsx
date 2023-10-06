import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import fakeContacts from './FakeContacts';

const sortContactsAlfabetica = (contacts) => {
  return contacts.slice().sort((a, b) => a.name.localeCompare(b.name));
};

const Contatos = (props) => {

  props.navigation.setOptions({
    headerTitle: null,
    headerShown: false,
  });


  const sortedContacts = sortContactsAlfabetica(fakeContacts);

  const renderItem = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactPhoneNumber}>{item.phoneNumber}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={sortedContacts}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  contactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DBDBE2',
    marginBottom: 2,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 60,
    marginRight: 16,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#522CDE",
  },
  contactPhoneNumber: {
    fontSize: 15,
    color: "#522CDE",
    fontWeight: 'bold',
  },
});

export default Contatos;
