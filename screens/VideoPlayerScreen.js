import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';

export default function VideoPlayerScreen() {
  return (
    <View style={styles.container}>
      <WebView
        source={{ uri: 'https://www.youtube.com/embed/dQw4w9WgXcQ' }}
        style={styles.webview}
        allowsFullscreenVideo
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  webview: { width: Dimensions.get('window').width, height: 250 },
});
