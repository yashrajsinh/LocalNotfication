import { View, Text, Pressable, StyleSheet } from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
};

const NotificationButton = ({ onPress }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
        onPress={onPress}
      >
        <Text style={styles.text}>Show Notification</Text>
      </Pressable>
    </View>
  );
};

export default NotificationButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: '#007AFF', // iOS blue
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 3, // Android shadow
  },
  buttonPressed: {
    opacity: 0.4,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});
