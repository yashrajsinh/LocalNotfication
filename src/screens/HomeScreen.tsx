import { View, Text } from 'react-native';
import React from 'react';
import NotificationButton from '../components/NotificationButton';
//Toast
import Toast from 'react-native-toast-message';

type Props = {};

const HomeScreen = (props: Props) => {
  const handleNotificaiton = () => {
    Toast.show({
      type: 'info',
      text1: 'Coming Soon!',
      text2: 'You will get notification in 1 light year',
      position: 'bottom',
    });
  };
  return (
    <View style={{ flex: 1 }}>
      <NotificationButton onPress={handleNotificaiton} />
      <Toast />
    </View>
  );
};

export default HomeScreen;
