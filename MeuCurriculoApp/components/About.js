// components/About.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sou um trabalhador automotivado e entusiasta, com ampla experiência em diversos campos da gestão pública e privada. Tenho um histórico comprovado de realizações e sou reconhecido por minha capacidade de colaboração e liderança. Confiante, trabalhador e comprometido em alcançar resultados, independente da posição que ocupo. Confiável e dedicado a encontrar um bom ambiente de trabalho que combine comigo.</Text>
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

export default About;
