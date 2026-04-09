import { View } from 'react-native';
import React, { useEffect } from 'react';
import NotificationButton from '../components/NotificationButton';
//Toast
import Toast from 'react-native-toast-message';
//notification permission (SINGLETON OBJ)
import { notificationService } from '../utils/notification';
//BG noti
import { sendAnswerNotification } from '../utils/backGroundNotificaiton';
import { initNotificationHandler } from '../services/notificationHandler';
type Props = {};

const HomeScreen = (props: Props) => {
  //load notfication channel and permision while app loads
  useEffect(() => {
    notificationService.init();
    initNotificationHandler();
    sendAnswerNotification();
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
