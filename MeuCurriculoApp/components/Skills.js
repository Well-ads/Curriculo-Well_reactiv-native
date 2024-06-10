// components/Skills.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Skills = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
Habilidades interpessoais
Adaptabilidade
Boa comunicação
Facilidade de aprendizado
Paciente
.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  }
});

export default Skills;
