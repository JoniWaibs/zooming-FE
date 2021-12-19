import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const ContactsList = () => {
  const starred: string = 'Starred'
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.itemStarred}>
        <View style={styles.iconStarred}>
          <AntDesign name={'star'} size={30} color={'#f1f1f1'} />
        </View>
        <Text style={styles.textStarred}>{starred}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContactsList;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    width: '100%',
  },
  itemStarred: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 5,
  },
  iconStarred: {
    backgroundColor: '#6d6d6d',
    padding: 12,
    borderRadius: 15,
  },
  textStarred: {
    color: '#f1f1f1',
    fontSize: 20,
    paddingLeft: 20,
  }
});
