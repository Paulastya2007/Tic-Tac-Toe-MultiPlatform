// components/About.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Text style={styles.content}>This game is made by Paulastya Chakraborty</Text>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  title: {
    fontSize: 36,
    color: '#0f0',
    fontFamily: 'monospace',
    marginBottom: 20,
    textShadowColor: '#00f',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  content: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 40,
  },
  backButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#f00',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    color: '#0f0',
    fontFamily: 'monospace',
  },
});

export default About;
