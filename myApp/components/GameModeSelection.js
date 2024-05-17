import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const GameModeSelection = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Game Mode</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayWithAI')}>
        <Text style={styles.buttonText}>Play with AI</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PlayWithLocal')}>
        <Text style={styles.buttonText}>Play with Local Player</Text>
      </TouchableOpacity>
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
  },
  title: {
    fontSize: 36,
    color: '#0f0',
    fontFamily: 'monospace',
    marginBottom: 50,
    textShadowColor: '#00f',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  button: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginVertical: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#0f0',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#444',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
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

export default GameModeSelection;
