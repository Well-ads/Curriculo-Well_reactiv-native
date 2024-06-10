// components/Home.js
import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/<https://drive.google.com/drive/u/0/folders/1s38k81PpMkcfrJWT-n-DBChJVjReM140')} style={styles.image} />
      <Text style={styles.name}>Wellington Lima</Text>
      <View style={styles.buttons}>
        <Button title="Sobre" onPress={() => navigation.navigate('About')} />
        <Button title="Habilidades" onPress={() => navigation.navigate('Skills')} />
        <Button title="Experiência" onPress={() => navigation.navigate('Experience')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttons: {
    marginTop: 20,
  }
});

export default Home;
