import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import fakeContacts from './FakeContacts';


const Navegar = (props) => {

  props.navigation.setOptions({
    headerTitle: null,
    headerShown: false,
  });

  const renderItem = ({ item }) => (
    <View style={styles.contactContainer}>
      <Image source={{ uri: item.profileImage }} style={styles.profileImage} />
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.contactMessage}>{item.message}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={fakeContacts}
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
    width: 55,
    height: 55,
    borderRadius: 55,
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
  contactMessage: {
    fontSize: 17,
    color: "black",
    fontWeight: 'bold',
  },
});

export default Navegar;
