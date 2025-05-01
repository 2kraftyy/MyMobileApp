import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

export default function ContactFormScreen() {
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    Alert.alert('Message Sent', message);
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Your message"
        value={message}
        onChangeText={setMessage}
        multiline
        style={styles.textInput}
      />
      <Button title="Send" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    height: 100,
    marginBottom: 10,
    padding: 10,
    textAlignVertical: 'top',
  },
});
