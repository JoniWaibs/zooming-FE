import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';

import ContactsList from '../Components/contacts';
import Header from '../Components/header';
import MenuButtons from '../Components/menu';
import SearchBar from '../Components/searchbar';
// rnfes snippet to create initial code
const Home = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView>
        {/* Header */}
        <Header />
        {/* SearchBar */}
        <SearchBar />
        {/* Menu Buttons */}
        <MenuButtons />
        {/* Contact menu */}
        <ContactsList />
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1c1c1c',
    minHeight: '100%',
  },
});
