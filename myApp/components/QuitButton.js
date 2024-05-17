import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, BackHandler } from 'react-native';

const QuitButton = () => {
  const handleQuit = () => {
    if (Platform.OS === 'android') {
      BackHandler.exitApp();
    } else {
      alert('Quit functionality is not supported on this platform');
    }
  };

  if (Platform.OS === 'ios' || Platform.OS === 'web') {
    return null;
  }

  return (
    <TouchableOpacity style={styles.button} onPress={handleQuit}>
      <Text style={styles.buttonText}>Quit</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  buttonText: {
    fontSize: 20,
    color: '#0f0',
    fontFamily: 'monospace',
  },
});

export default QuitButton;
