import React from 'react';
import { View, StyleSheet } from 'react-native';

const LoadingSkeleton = ({ style }) => (
  <View style={[styles.container, style]}>
    <View style={styles.box} />
    <View style={[styles.box, { height: 16, width: '60%', marginTop: 12 }]} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    borderRadius: 12,
    overflow: 'hidden',
    padding: 12,
    marginVertical: 8,
  },
  box: { height: 140, backgroundColor: '#333', borderRadius: 8 }
});

export default LoadingSkeleton;
