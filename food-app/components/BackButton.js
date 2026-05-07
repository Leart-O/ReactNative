import React from 'react';
import { TouchableOpacity, Text, StyleSheet, AccessibilityInfo } from 'react-native';

const BackButton = ({ onPress, label = 'Back', style }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={label}
      onPress={onPress}
      style={[styles.btn, style]}
    >
      <Text style={styles.text}>‹</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  text: { color: '#fff', fontSize: 26, lineHeight: 26 },
});

export default BackButton;
