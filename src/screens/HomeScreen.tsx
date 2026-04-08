import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import NotificationButton from '../components/NotificationButton';
//Toast
import Toast from 'react-native-toast-message';
//ios notification permission
import { notificationService } from '../utils/notification';

type Props = {};

const HomeScreen = (props: Props) => {
  useEffect(() => {
    notificationService.init();
  }, []);

  const handleNotificaiton = () => {
    Toast.show({
      type: 'info',
      text1: 'Check Notificaiton',
      position: 'bottom',
    });
    notificationService.showNotification(
      'Hello',
      'This is local test notification',
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <NotificationButton onPress={handleNotificaiton} />
      <Toast />
    </View>
  );
};

export default HomeScreen;
