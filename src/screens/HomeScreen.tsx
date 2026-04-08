import { View, Text } from 'react-native';
import React from 'react';
import NotificationButton from '../components/NotificationButton';

type Props = {};

const HomeScreen = (props: Props) => {
  return (
    <View style={{ flex: 1 }}>
      <NotificationButton />
    </View>
  );
};

export default HomeScreen;
